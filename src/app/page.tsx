// app/page.tsx
import "./globalsv3.css"; // Import your global CSS file

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-bg-white text-text-dark">
      {" "}
      {/* ใช้ bg-bg-white และ text-text-dark ตามที่กำหนดใน globals.css */}
      <h1 className="font-heading text-4xl mb-6 text-primary-blue">
        เว็บไซต์ตัวอย่าง: รูปแบบสีและฟอนต์
      </h1>
      <section className="mb-8">
        <h2 className="font-heading text-3xl mb-4 text-text-dark">
          พาเลตสี (Color Palette)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-lg shadow-md bg-primary-blue text-white text-center">
            <div className="text-xl font-bold mb-2">Primary Blue</div>
            <div className="text-sm">#007bff</div>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-secondary-yellow text-text-dark text-center">
            <div className="text-xl font-bold mb-2">Secondary Yellow</div>
            <div className="text-sm">#ffc107</div>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-accent-light-blue text-text-dark text-center">
            <div className="text-xl font-bold mb-2">Accent Light Blue</div>
            <div className="text-sm">#ADD8E6</div>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-text-dark text-white text-center">
            <div className="text-xl font-bold mb-2">Text Dark</div>
            <div className="text-sm">#343a40</div>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-text-light text-white text-center">
            <div className="text-xl font-bold mb-2">Text Light</div>
            <div className="text-sm">#6c757d</div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="font-heading text-3xl mb-4 text-text-dark">
          การใช้งานฟอนต์ (Font Usage)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="font-heading text-2xl mb-2 text-primary-blue">
              หัวข้อหลัก (Heading Font) - Kanit
            </h3>
            <p className="font-heading text-xl">
              นี่คือตัวอย่างข้อความที่ใช้ฟอนต์ Kanit
              เพื่อแสดงหัวข้อที่โดดเด่นและชัดเจน
            </p>
            <p className="font-heading text-lg mt-2">
              (This is an example of text using Kanit font for prominent
              headings.)
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-2xl mb-2 text-text-dark">
              เนื้อหาทั่วไป (Body Font) - Sarabun
            </h3>
            <p className="text-lg">
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
        <h2 className="font-heading text-3xl mb-4 text-text-dark">
          ตัวอย่างองค์ประกอบ (Component Examples)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg shadow-lg bg-accent-light-blue">
            <h3 className="font-heading text-2xl text-primary-blue mb-3">
              กล่องข้อมูลสำคัญ
            </h3>
            <p className="text-text-dark text-lg mb-4">
              ใช้สี Accent Light Blue เป็นพื้นหลัง
              เพื่อดึงดูดความสนใจไปยังข้อมูลที่สำคัญ
              <br />
              (This box uses Accent Light Blue for its background to highlight
              important information.)
            </p>
            <button className="bg-primary-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              ปุ่มดำเนินการ
            </button>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-secondary-yellow">
            <h3 className="font-heading text-2xl text-text-dark mb-3">
              การแจ้งเตือน / คำเตือน
            </h3>
            <p className="text-text-dark text-lg mb-4">
              ใช้สี Secondary Yellow
              เพื่อแสดงการแจ้งเตือนหรือข้อมูลที่ต้องให้ความสนใจเป็นพิเศษ
              <br />
              (This box uses Secondary Yellow for alerts or special notices.)
            </p>
            <a href="#" className="text-primary-blue hover:underline font-bold">
              อ่านเพิ่มเติม
            </a>
          </div>
        </div>
      </section>
      {/* --- ส่วนที่เพิ่มเข้ามา: ตัวอย่างตาราง --- */}
      <section className="mb-8">
        <h2 className="font-heading text-3xl mb-4 text-text-dark">
          ตัวอย่างตาราง (Table Example)
        </h2>
        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-primary-blue">
              {" "}
              {/* หัวตารางใช้สี Primary Blue */}
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-heading font-medium text-white uppercase tracking-wider"
                >
                  รายการ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-heading font-medium text-white uppercase tracking-wider"
                >
                  รายละเอียด
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-heading font-medium text-white uppercase tracking-wider"
                >
                  สถานะ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-heading font-medium text-white uppercase tracking-wider"
                >
                  ราคา
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* แถวข้อมูลที่ 1 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-text-dark">
                  <div className="flex items-center">
                    <div className="text-sm font-medium">สินค้า A</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-text-light">
                  <div className="text-sm">สินค้าอิเล็กทรอนิกส์</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-accent-light-blue text-primary-blue">
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
                    <div className="text-sm font-medium">บริการ B</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-text-light">
                  <div className="text-sm">บริการรายเดือน</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-secondary-yellow text-text-dark">
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
                    <div className="text-sm font-medium">โปรเจกต์ C</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-text-light">
                  <div className="text-sm">พัฒนาระบบ</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-text-light text-white">
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
      <footer className="text-center mt-12 text-text-light text-sm">
        <p>
          © {new Date().getFullYear()} Color Pattern Demo. All rights reserved.
        </p>
        <p className="mt-2">ออกแบบโดยใช้ Next.js และ Tailwind CSS</p>
      </footer>
    </main>
  );
}
