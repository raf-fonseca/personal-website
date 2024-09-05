export const products = [
  {
    href: "https://github.com/raf-fonseca/Growie", //TODO: Add link to Growie once deployed
    title: "Growie",
    description:
      "Introducing Growie: a platform where farmers and gardeners rent out land to nature lovers, letting them create and enjoy their own personalized gardens! 🌱🌿",
    thumbnail: "/images/Growie.jpeg",
    images: [
      "/images/sidefolio-moonbeam.png",
      "/images/sidefolio-moonbeam-2.png",
    ],
    stack: ["MongoDB", "Nextjs", "Prisma", "Next Auth", "Typescript", "React", "Tailwindcss"], 
    slug: "growie",
    content: (
      <div>
        <p>
        Growie connects nature lovers with landowners,
        enabling them to rent out unused land for the creation
        of dream gardens. It is more than just a business; it is a 
        movement towards sustainable living, promoting the use of under
        utilized land for environmental growth. Growie is sustainable because
        it encourages mindful land use, fosters local agriculture, and strengthens community bonds.
        The potential for growth is significant, driven by increasing demand for fresh produce as communities
        become more aware of the harmful pesticides in conventional farming.{" "}
        </p>
        <p>
        For landowners, Growie provides a unique opportunity to generate additional 
        income from their unused land. By utilizing this service, they can turn idle 
        land into a profitable asset while supporting sustainable agriculture practices. 
        On the other hand, nature enthusiasts, often face the challenge of limited green space. 
        Growie offers them the chance to rent a plot of land where they can experience the joy of 
        growing their own crops, ensuring they are organic and free from harmful chemicals commonly 
        found in conventional farming. This aligns with the growing trend of consumers seeking healthier, 
        more sustainable food sources. To effectively reach landowners, I will include partnerships 
        with agricultural organizations, direct mail campaigns, and local events in rural communities. 
        For nature enthusiasts, digital marketing will play a key role, leveraging social media, 
        gardening blogs, and sustainability forums to connect with individuals passionate about healthy living and gardening.
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
