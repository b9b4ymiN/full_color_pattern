// app/page.tsx
import "../globalsv5.css";
export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-background text-foreground">
      <h1 className="font-kanit text-4xl mb-6 text-color-owl-accent-yellow"> {/* Headings in yellow for contrast */}
        เว็บไซต์ตัวอย่าง: รูปแบบสีและฟอนต์
      </h1>

      <section className="mb-8">
        <h2 className="font-kanit text-3xl mb-4 text-color-owl-accent-yellow">
          พาเลตสี (Color Palette)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Colors from the new theme */}
          <div className="p-4 rounded-xl shadow-md bg-color-primary-blue text-color-text-light text-center">
            <div className="text-xl font-bold mb-2">Primary Blue</div>
            <div className="text-sm">#36A3F9</div>
          </div>
          <div className="p-4 rounded-xl shadow-md bg-color-owl-body text-color-text-light text-center">
            <div className="text-xl font-bold mb-2">Owl Body Blue</div>
            <div className="text-sm">#4A5568</div>
          </div>
          <div className="p-4 rounded-xl shadow-md bg-color-owl-belly text-color-text-dark text-center">
            <div className="text-xl font-bold mb-2">Owl Belly Light</div>
            <div className="text-sm">#EBF8FF</div>
          </div>
          <div className="p-4 rounded-xl shadow-md bg-color-owl-overalls-red text-color-text-light text-center">
            <div className="text-xl font-bold mb-2">Overalls Red</div>
            <div className="text-sm">#DC2626</div>
          </div>
          <div className="p-4 rounded-xl shadow-md bg-color-owl-accent-yellow text-color-text-dark text-center">
            <div className="text-xl font-bold mb-2">Owl Accent Yellow</div>
            <div className="text-sm">#FBBF24</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-kanit text-3xl mb-4 text-color-owl-accent-yellow">
          การใช้งานฟอนต์ (Font Usage)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Heading Font Example */}
          <div className="p-6 bg-color-owl-belly rounded-3xl shadow-xl border border-color-owl-body text-color-text-dark"> {/* Light background, dark text */}
            <h3 className="font-kanit text-2xl mb-2 text-color-owl-body">
              หัวข้อหลัก (Heading Font) - Kanit
            </h3>
            <p className="font-kanit text-xl">
              นี่คือตัวอย่างข้อความที่ใช้ฟอนต์ Kanit
              เพื่อแสดงหัวข้อที่โดดเด่นและชัดเจน
            </p>
            <p className="font-kanit text-lg mt-2">
              (This is an example of text using Kanit font for prominent
              headings.)
            </p>
          </div>
          {/* Card 2: Body Font Example */}
          <div className="p-6 bg-color-owl-overalls-red rounded-3xl shadow-xl border border-color-owl-accent-yellow text-color-text-light"> {/* Red background, light text */}
            <h3 className="font-kanit text-2xl mb-2 text-color-owl-accent-yellow">
              เนื้อหาทั่วไป (Body Font) - Sarabun
            </h3>
            <p className="font-sarabun text-lg">
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
        <h2 className="font-kanit text-3xl mb-4 text-color-owl-accent-yellow">
          ตัวอย่างองค์ประกอบ (Component Examples)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* กล่องข้อมูลสำคัญ */}
          <div className="p-6 bg-color-owl-belly rounded-3xl shadow-xl border border-color-owl-body">
            <h3 className="font-kanit text-2xl text-color-owl-body mb-3">
              กล่องข้อมูลสำคัญ
            </h3>
            <p className="text-color-text-dark text-lg mb-4">
              ใช้สี Owl Belly เป็นพื้นหลัง
              เพื่อดึงดูดความสนใจไปยังข้อมูลที่สำคัญ
              <br />
              (This box uses Owl Belly for its background to highlight
              important information.)
            </p>
            <button className="bg-color-owl-overalls-red text-color-text-light py-3 px-6 rounded-full font-bold hover:bg-red-700 transition-colors duration-200 shadow-md">
              ปุ่มดำเนินการ
            </button>
          </div>
          {/* การแจ้งเตือน / คำเตือน */}
          <div className="p-6 bg-color-owl-accent-yellow rounded-3xl shadow-xl border border-color-owl-overalls-red">
            <h3 className="font-kanit text-2xl text-color-owl-overalls-red mb-3">
              การแจ้งเตือน / คำเตือน
            </h3>
            <p className="text-color-text-dark text-lg mb-4">
              ใช้สี Owl Accent Yellow
              เพื่อแสดงการแจ้งเตือนหรือข้อมูลที่ต้องให้ความสนใจเป็นพิเศษ
              <br />
              (This box uses Owl Accent Yellow for alerts or special notices.)
            </p>
            <a href="#" className="text-color-owl-body hover:underline font-bold">
              อ่านเพิ่มเติม
            </a>
          </div>
        </div>
      </section>

      {/* --- ตัวอย่างตาราง (ปรับให้เข้ากับธีมนกฮูก) --- */}
      <section className="mb-8">
        <h2 className="font-kanit text-3xl mb-4 text-color-owl-accent-yellow">
          ตัวอย่างตาราง (Table Example)
        </h2>
        <div className="overflow-x-auto rounded-3xl shadow-xl border border-color-owl-body">
          <table className="min-w-full divide-y divide-color-owl-body">
            <thead className="bg-color-owl-overalls-red"> {/* Head in red */}
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-kanit font-medium text-color-text-light uppercase tracking-wider"
                >
                  รายการ
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-kanit font-medium text-color-text-light uppercase tracking-wider"
                >
                  รายละเอียด
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-kanit font-medium text-color-text-light uppercase tracking-wider"
                >
                  สถานะ
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-kanit font-medium text-color-text-light uppercase tracking-wider"
                >
                  ราคา
                </th>
              </tr>
            </thead>
            <tbody className="bg-color-owl-belly divide-y divide-color-owl-body"> {/* Body in light blue/white */}
              {/* Row 1 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-color-text-dark">
                  <div className="flex items-center">
                    <div className="text-sm font-sarabun">สินค้า A</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-color-text-dark">
                  <div className="text-sm font-sarabun">สินค้าอิเล็กทรอนิกส์</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-color-owl-accent-yellow text-color-text-dark">
                    พร้อมส่ง
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-color-text-dark">
                  1,200 ฿
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-color-text-dark">
                  <div className="flex items-center">
                    <div className="text-sm font-sarabun">บริการ B</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-color-text-dark">
                  <div className="text-sm font-sarabun">บริการรายเดือน</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-color-owl-overalls-red text-color-text-light">
                    รอการชำระ
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-color-text-dark">
                  499 ฿
                </td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-color-text-dark">
                  <div className="flex items-center">
                    <div className="text-sm font-sarabun">โปรเจกต์ C</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-color-text-dark">
                  <div className="text-sm font-sarabun">พัฒนาระบบ</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-color-owl-body text-color-text-light">
                    กำลังดำเนินการ
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-color-text-dark">
                  80,000 ฿
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="text-center mt-12 text-foreground text-sm">
        <p>
          © {new Date().getFullYear()} Color Pattern Demo. All rights reserved.
        </p>
        <p className="mt-2">ออกแบบโดยใช้ Next.js และ Tailwind CSS</p>
      </footer>
    </main>
  );
}