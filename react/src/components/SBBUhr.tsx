import { useEffect, useRef, HTMLAttributes } from "react";
import ClockFace from "./ClockFace";
import HoursHand from "./HoursHand";
import MinutesHand from "./MinutesHand";
import SecondsHand from "./SecondsHand";

const cycleDuration = 58.5;
const easingDuration = 2000;

export default function SBBUhr({
  style,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const hoursHandRef = useRef<SVGSVGElement>(null);
  const minutesHandRef = useRef<SVGSVGElement>(null);
  const secondsHandRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (
      !secondsHandRef.current ||
      !minutesHandRef.current ||
      !hoursHandRef.current
    )
      return;

    let animationFrame: number;
    let sDeg: number;
    let mDeg: number;
    let hDeg: number;
    let date: Date;
    let time: Record<string, number>;

    function animate() {
      date = new Date();
      time = {
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
        ms: date.getMilliseconds(),
        mss: date.getSeconds() * 1000 + date.getMilliseconds(),
      };
      sDeg = rotateHand({
        target: secondsHandRef.current!,
        prevPosition: sDeg,
        position: Math.min(
          time.s * (360 / cycleDuration) + time.ms * 0.006,
          360
        ),
      });
      mDeg = rotateHand({
        target: minutesHandRef.current!,
        prevPosition: mDeg,
        position: easeOutElastic({
          millisecondsOfMinute: time.mss,
          startPositionDeg: time.m * 6 - 6,
          incrementDeg: 6,
          durationInMilliseconds: easingDuration,
        }),
      });
      hDeg = rotateHand({
        target: hoursHandRef.current!,
        prevPosition: hDeg,
        position: easeOutElastic({
          millisecondsOfMinute: time.mss,
          startPositionDeg: time.h * 30 + time.m / 2 - 0.5,
          incrementDeg: 0.5,
          durationInMilliseconds: easingDuration,
        }),
      });
      animationFrame = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div style={{ position: "relative", ...style }} {...props}>
      <ClockFace style={{ position: "absolute", inset: 0 }} />
      <HoursHand
        ref={hoursHandRef}
        style={{ position: "absolute", inset: 0 }}
      />
      <MinutesHand
        ref={minutesHandRef}
        style={{ position: "absolute", inset: 0 }}
      />
      <SecondsHand
        ref={secondsHandRef}
        style={{ position: "absolute", inset: 0 }}
      />
    </div>
  );
}

function easeOutElastic({
  millisecondsOfMinute,
  startPositionDeg,
  incrementDeg,
  durationInMilliseconds,
}: {
  millisecondsOfMinute: number;
  startPositionDeg: number;
  incrementDeg: number;
  durationInMilliseconds: number;
}) {
  millisecondsOfMinute = millisecondsOfMinute / durationInMilliseconds;
  if (millisecondsOfMinute < 1) {
    return (
      incrementDeg *
        Math.pow(2, -10 * millisecondsOfMinute) *
        Math.sin(
          ((millisecondsOfMinute * durationInMilliseconds - 2) *
            (2 * Math.PI)) /
            300
        ) *
        1.5 +
      incrementDeg +
      startPositionDeg
    );
  }
  return startPositionDeg + incrementDeg;
}

function rotateHand({
  target,
  prevPosition,
  position,
}: {
  target: SVGElement;
  prevPosition: number;
  position: number;
}) {
  if (prevPosition !== position) {
    target.style.transform = "rotate(" + position + "deg)";
  }
  return position;
}
