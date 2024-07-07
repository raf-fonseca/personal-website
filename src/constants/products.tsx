export const products = [
  {
    href: "https://gomoonbeam.com",
    title: "Moonbeam",
    description:
      "Never write from scratch again with Moonbeam, your AI first writing tool",
    thumbnail: "/images/sidefolio-moonbeam.png",
    images: [
      "/images/sidefolio-moonbeam.png",
      "/images/sidefolio-moonbeam-2.png",
    ],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/raf-fonseca/Network-Converter",
    title: "Network Converter",
    description:
      "A converter between a CAN Bus to RS-232 Serial network, connected by a Roboclaw",
    thumbnail: "/images/Converter_schematic.png",
    images: [
      "/images/sidefolio-algochurn.png",
      "/images/sidefolio-algochurn-2.png",
    ],
    stack: ["KiCAD", "PCB Design", "Breadboard Testing", "Component and Datasheet Analysis"],
    slug: "network-converter",
    content: (
      <div>
        <p>
          The project involves using an STM32 microcontroller with UART and CAN interfaces, costing $3.09. 
          The TJA1042 CAN transceiver, compatible with 3.3V MCUs, costs $1.77. The RS 232 transceiver, compatible with the Roboclaw,
          costs $2.65. Three debug RGB LEDs with specified forward voltages and resistors, 
          costing $0.45, completing the setup. All devices have matching bit rates above 460 kbps, which meets the data 
          transfer rate requirements of the Roboclaw. The total cost is $7.96.{" "}
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/raf-fonseca/Interactive-Data-Processor",
    title: "Interactive Data Processor",
    description:
      "Exploring CAN and I2C interfaces with the Teensy 4.1 microcontroller for enhanced connectivity and functionality",
    thumbnail: "/images/schematic.png",
    images: [
      "/images/teensy41.jpeg",
      "/images/kicad_logo.png",
    ],
    stack: ["KiCAD", "Datasheet Analysis"],
    slug: "data-processor",
    content: (
      <div>
        <p>
        The Teensy 4.1, featuring an ARM Cortex-M7 processor, manages communication over CAN bus and serial interfaces. 
        Motor controllers, including SPARK MAX and Victor SP, handle brushless and brushed DC motors, with SPARK MAX 
        using CAN bus and Victor SP relying on PWM. Sensors like the MPU-6050 for motion tracking, BMP280 for atmospheric
        pressure and temperature, and HC-SR04 for ultrasonic distance measurement enhance environmental interaction.
        Communication protocols include I2C for sensor data aggregation and SPI for LCD module communication, 
        ensuring efficient data exchange. WS2812B LEDs provide visual feedback, controlled via PWM, while BOB-12009 modules
        manage logic level conversion between 3.3V and 5V. An Arduino Nano acts as a supplementary processing unit, communicating
        serially with the Teensy for expanded functionality.{" "}
        </p>
      </div>
    ),
  },
];
