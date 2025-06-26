// app/page.tsx
import "../globalsv4.css";
// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-background text-foreground">
      <h1 className="font-kanit text-4xl mb-6 color-neutral-cream">
        {" "}
        {/* หัวข้อหลักใช้สีเหลือง */}
        เว็บไซต์ตัวอย่าง: รูปแบบสีและฟอนต์
      </h1>

      <section className="mb-8">
        <h3 className="font-kanit text-2xl mb-4 color-neutral-cream">
          {" "}
          {/* หัวข้อรองใช้สีเหลือง */}
          พาเลตสี (Color Palette)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Box 1: Primary Blue */}
          <div className="p-4 rounded-xl shadow-md bg-primary-blue text-neutral-cream text-center">
            <div className="text-xl font-bold mb-2">Primary Blue</div>
            <div className="text-sm">#0046BE</div>
          </div>
          {/* Box 2: Accent Red */}
          <div className="p-4 rounded-xl shadow-md bg-accent-red text-neutral-cream text-center">
            <div className="text-xl font-bold mb-2">Accent Red</div>
            <div className="text-sm">#B20400</div>
          </div>
          {/* Box 3: Accent Yellow */}
          <div className="p-4 rounded-xl shadow-md bg-accent-yellow text-text-dark text-center">
            <div className="text-xl font-bold mb-2">Accent Yellow</div>
            <div className="text-sm">#F9AC12</div>
          </div>
          {/* Box 4: Neutral Cream */}
          <div className="p-4 rounded-xl shadow-md bg-neutral-cream text-text-dark text-center">
            <div className="text-xl font-bold mb-2">Neutral Cream</div>
            <div className="text-sm">#F4E7D4</div>
          </div>
          {/* Box 5: Text Dark */}
          <div className="p-4 rounded-xl shadow-md bg-text-dark text-neutral-cream text-center">
            <div className="text-xl font-bold mb-2">Text Dark</div>
            <div className="text-sm">#171717</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-kanit text-3xl mb-4 text-neutral-cream">
          การใช้งานฟอนต์ (Font Usage)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Heading Font Example */}
          <div className="p-6 bg-neutral-cream rounded-3xl shadow-xl border border-primary-blue">
            {" "}
            {/* พื้นหลัง Neutral Cream, โค้งมาก, shadow ชัด, ขอบเป็น Primary Blue */}
            <h3 className="font-kanit text-2xl mb-2 text-primary-blue">
              หัวข้อหลัก (Heading Font) - Kanit
            </h3>
            <p className="font-kanit text-xl text-text-dark">
              นี่คือตัวอย่างข้อความที่ใช้ฟอนต์ Kanit
              เพื่อแสดงหัวข้อที่โดดเด่นและชัดเจน
            </p>
            <p className="font-kanit text-lg mt-2 text-text-dark">
              (This is an example of text using Kanit font for prominent
              headings.)
            </p>
            
          </div>

          {/* Card 2: Body Font Example */}
          <div className="p-6 bg-accent-yellow rounded-3xl shadow-xl border border-accent-red">
            {" "}
            {/* พื้นหลัง Accent Yellow, โค้งมาก, shadow ชัด, ขอบเป็น Accent Red */}
            <h3 className="font-kanit text-2xl mb-2 text-accent-red">
              เนื้อหาทั่วไป (Body Font) - Sarabun
            </h3>
            <p className="font-sarabun text-lg text-text-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
              <br />
              <br />
              นี่คือตัวอย่างข้อความที่ใช้ฟอนต์ Sarabun
              ซึ่งเหมาะสำหรับเนื้อหาทั่วไป ทำให้อ่านง่ายและสบายตาสำหรับภาษาไทย
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-kanit text-3xl mb-4 text-neutral-cream">
          ตัวอย่างองค์ประกอบ (Component Examples)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* กล่องข้อมูลสำคัญ */}
          <div className="p-6 bg-primary-blue rounded-3xl shadow-xl border border-primary-blue">
            <h3 className="font-kanit text-2xl text-neutral-cream mb-3">
              กล่องข้อมูลสำคัญ
            </h3>
            <p className="text-neutral-cream text-lg mb-4">
              ใช้สี Neutral Cream เป็นพื้นหลัง
              เพื่อดึงดูดความสนใจไปยังข้อมูลที่สำคัญ
              <br />
              (This box uses Neutral Cream for its background to highlight
              important information.)
            </p>
            <button className="bg-accent-yellow text-text-dark py-3 px-6 rounded-full font-bold hover:bg-red-700 transition-colors duration-200 shadow-md">
              {" "}
              {/* ปุ่มเป็นสีแดง, ข้อความครีม, โค้งเยอะ, shadow */}
              ปุ่มดำเนินการ
            </button>
          </div>
          {/* การแจ้งเตือน / คำเตือน */}
          <div className="p-6 bg-accent-yellow rounded-3xl shadow-xl border border-accent-red">
            <h3 className="font-kanit text-2xl text-accent-red mb-3">
              การแจ้งเตือน / คำเตือน
            </h3>
            <p className="text-text-dark text-lg mb-4">
              ใช้สี Accent Yellow
              เพื่อแสดงการแจ้งเตือนหรือข้อมูลที่ต้องให้ความสนใจเป็นพิเศษ
              <br />
              (This box uses Accent Yellow for alerts or special notices.)
            </p>
            <a href="#" className="text-primary-blue hover:underline font-bold">
              อ่านเพิ่มเติม
            </a>
          </div>
        </div>
      </section>

      {/* --- ส่วนที่เพิ่มเข้ามา: ตัวอย่างตาราง --- */}
      <section className="mb-8">
        <h2 className="font-kanit text-3xl mb-4 text-neutral-cream">
          ตัวอย่างตาราง (Table Example)
        </h2>
        {/* ตารางโดยรวมโค้งมนและมี shadow */}
        <div className="overflow-hidden rounded-3xl shadow-xl border border-primary-blue">
          <table className="min-w-full divide-y divide-primary-blue">
            <thead className="bg-primary-blue">
              {" "}
              {/* หัวตารางใช้ Accent Red */}
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-kanit font-medium text-accent-yellow uppercase tracking-wider"
                >
                  รายการ
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-kanit font-medium text-accent-yellow uppercase tracking-wider"
                >
                  รายละเอียด
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-kanit font-medium text-accent-yellow uppercase tracking-wider"
                >
                  สถานะ
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-kanit font-medium text-accent-yellow uppercase tracking-wider"
                >
                  ราคา
                </th>
              </tr>
            </thead>
            <tbody className="bg-neutral-cream divide-y divide-primary-blue">
              {" "}
              {/* พื้นหลัง Neutral Cream */}
              {/* แถวข้อมูลที่ 1 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-text-dark">
                  <div className="flex items-center">
                    <div className="text-sm font-sarabun">สินค้า A</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-text-dark">
                  <div className="text-sm font-sarabun">
                    สินค้าอิเล็กทรอนิกส์
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-accent-yellow text-text-dark">
                    {" "}
                    {/* สถานะใช้ Accent Yellow */}
                    พร้อมส่ง
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-dark">
                  1,200 ฿
                </td>
              </tr>
              {/* แถวข้อมูลที่ 2 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-text-dark">
                  <div className="flex items-center">
                    <div className="text-sm font-sarabun">บริการ B</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-text-dark">
                  <div className="text-sm font-sarabun">บริการรายเดือน</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-accent-red text-neutral-cream">
                    {" "}
                    {/* สถานะใช้ Accent Red */}
                    รอการชำระ
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-dark">
                  499 ฿
                </td>
              </tr>
              {/* แถวข้อมูลที่ 3 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-text-dark">
                  <div className="flex items-center">
                    <div className="text-sm font-sarabun">โปรเจกต์ C</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-text-dark">
                  <div className="text-sm font-sarabun">พัฒนาระบบ</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-primary-blue text-neutral-cream">
                    {" "}
                    {/* สถานะใช้ Primary Blue */}
                    กำลังดำเนินการ
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-dark">
                  80,000 ฿
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* --- สิ้นสุดส่วนที่เพิ่มเข้ามา: ตัวอย่างตาราง --- */}

      <footer className="text-center mt-12 text-foreground text-sm">
        <p>
          © {new Date().getFullYear()} Color Pattern Demo. All rights reserved.
        </p>
        <p className="mt-2">ออกแบบโดยใช้ Next.js และ Tailwind CSS</p>
      </footer>
    </main>
  );
}
