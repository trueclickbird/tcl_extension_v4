enum PingUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

//% weight=10 color=#0fbc11 icon="\uf1b9" groups='["Motor","Motor&time", "TrackingSensor", "IRSensor", "UltrasonicSensor", "Advance"]'
namespace Trueclicklife {

    //% block="Forward|Speed: %value"
    //% value.min=0 value.max=100
    //% group="Motor"
    //% weight=10
    export function forward(value: number) {
        pins.analogWritePin(AnalogPin.P13, value * 10.2)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, value * 10.2)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    //% block="Back|Speed: %value"
    //% value.min=0 value.max=100
    //% group="Motor"
    //% weight=9
    export function back(value: number) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, value * 10.2)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, value * 10.2)
    }

    //% block="Turn Left|Speed: %value"
    //% value.min=0 value.max=100
    //% group="Motor"
    //% weight=8
    export function turnleft(value: number) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, value * 10.2)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    //% block="Turn Right|Speed: %value"
    //% value.min=0 value.max=100
    //% group="Motor"
    //% weight=7
    export function turnright(value: number) {
        pins.analogWritePin(AnalogPin.P13, value * 10.2)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    //% block="Stop"
    //% group="Motor"
    //% weight=6
    export function stop() {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    //% block="Forward Speed %value time %number \\sec"
    //% value.min=0 value.max=100
    //% group="Motor&time"
    //% weight=10
    export function forwardfor(value: number, time: number) {
        pins.analogWritePin(AnalogPin.P13, value * 10.2)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, value * 10.2)
        pins.analogWritePin(AnalogPin.P16, 0)
        basic.pause(time * 1000)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)

    }

    //% block="Back Speed %value time %number sec"
    //% value.min=0 value.max=100
    //% group="Motor&time"
    //% weight=9
    export function backfor(value: number, time: number) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, value * 10.2)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, value * 10.2)
        basic.pause(time * 1000)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)

    }



    //% block="Turn Left Speed: %value time: %number sec"
    //% value.min=0 value.max=100
    //% group="Motor&time"
    //% weight=8
    export function turnleftfor(value: number, time: number) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, value * 10.2)
        pins.analogWritePin(AnalogPin.P16, 0)
        basic.pause(time * 1000)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)

    }

    //% block="Turn Right Speed: %value time: %number sec"
    //% value.min=0 value.max=100
    //% group="Motor&time"
    //% weight=7
    export function turnrightfor(value: number, time: number) {
        pins.analogWritePin(AnalogPin.P13, value * 10.2)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
        basic.pause(time * 1000)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)

    }

    //% block="Forward M1|Speed: %motor1 M2|Speed: %motor2"
    //% motor1.min=0 motor1.max=100
    //% motor2.min=0 motor2.max=100
    //% group="Advance"
    //% weight=10
    //% advanced=true
    export function forwardadvance(motor1: number, motor2: number) {
        pins.analogWritePin(AnalogPin.P13, motor1 * 10.2)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, motor2 * 10.2)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    //% block="Forward M1|Speed: %motor1 M2|Speed: %motor2 time: %number sec"
    //% motor1.min=0 motor1.max=100
    //% motor2.min=0 motor2.max=100
    //% group="Advance"
    //% weight=9
    //% advanced=true
    export function forwardforadvance(motor1: number, motor2: number, time: number) {
        pins.analogWritePin(AnalogPin.P13, motor1 * 10.2)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, motor2 * 10.2)
        pins.analogWritePin(AnalogPin.P16, 0)
        basic.pause(time * 1000)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    //% block="Back M1|Speed: %motor1 M2|Speed: %motor2"
    //% motor1.min=0 motor1.max=100
    //% motor2.min=0 motor2.max=100
    //% group="Advance"
    //% weight=8
    //% advanced=true
    export function backadvance(motor1: number, motor2: number) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, motor1 * 10.2)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, motor2 * 10.2)
    }

    //% block="Back M1|Speed: %motor1 M2|Speed: %motor2 time: %number sec"
    //% motor1.min=0 motor1.max=100
    //% motor2.min=0 motor2.max=100
    //% group="Advance"
    //% weight=7
    //% advanced=true
    export function backforadvance(motor1: number, motor2: number, time: number) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, motor1 * 10.2)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, motor2 * 10.2)
        basic.pause(time * 1000)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)

    }

    //% block="Spin Left|Speed: %value"
    //% value.min=0 value.max=100
    //% group="Advance"
    //% weight=6
    //% advanced=true
    export function spinleft(value: number) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, value * 10.2)
        pins.analogWritePin(AnalogPin.P15, value * 10.2)
        pins.analogWritePin(AnalogPin.P16, 0)
    }

    //% block="Spin Left Speed: %value time: %number sec"
    //% value.min=0 value.max=100
    //% group="Advance"
    //% weight=5
    //% advanced=true
    export function spinleftfor(value: number, time: number) {
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, value * 10.2)
        pins.analogWritePin(AnalogPin.P15, value * 10.2)
        pins.analogWritePin(AnalogPin.P16, 0)
        basic.pause(time * 1000)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)

    }

    //% block="Spin Right|Speed: %value"
    //% value.min=0 value.max=100
    //% group="Advance"
    //% weight=4
    //% advanced=true
    export function spinright(value: number) {
        pins.analogWritePin(AnalogPin.P13, value * 10.2)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, value * 10.2)
    }

    //% block="Spin Right Speed: %value time: %number sec"
    //% value.min=0 value.max=100
    //% group="Advance"
    //% weight=3
    //% advanced=true
    export function spinrightfor(value: number, time: number) {
        pins.analogWritePin(AnalogPin.P13, value * 10.2)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, value * 10.2)
        basic.pause(time * 1000)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P16, 0)

    }

    //% block="Left sensor %ls"
    //% group="TrackingSensor"
    //% weight=2
    export function leftsensor(ls: AnalogPin) {
        return pins.analogReadPin(ls)
    }

    //% block="Right sensor %rs"
    //% group="TrackingSensor"
    //% weight=1
    export function rightsensor(rs: AnalogPin) {
        return pins.analogReadPin(rs)
    }

    //% block="IR sensor %irs"
    //% group="IRSensor"
    //% weight=1
    export function irsensor(irs: DigitalPin) {
        return pins.digitalReadPin(irs)
    }

    //% block="ping trig %trig|echo %echo|unit %unit"
    //% group="UltrasonicSensor"
    //% weight=1
    export function ping(trig: DigitalPin, echo: DigitalPin, unit: PingUnit, maxCmDistance = 500): number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(d, 58);
            case PingUnit.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }
}