// app/page.tsx
import "../master.css";
// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-background text-foreground">
      <h1 className="font-kanit text-4xl mb-6 text-text-dark">
        เว็บไซต์ตัวอย่าง: รูปแบบสีและฟอนต์
      </h1>

      <section className="mb-8">
        <h2 className="font-kanit text-3xl mb-4 text-text-dark">
          พาเลตสี (Color Palette)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Box 1: Primary Teal */}
          <div className="p-4 rounded-xl shadow-md bg-primary-teal text-white text-center">
            <div className="text-xl font-bold mb-2">Primary Teal</div>
            <div className="text-sm">#00C4B6</div>
          </div>
          {/* Box 2: Accent Orange */}
          <div className="p-4 rounded-xl shadow-md bg-accent-orange text-white text-center">
            <div className="text-xl font-bold mb-2">Accent Orange</div>
            <div className="text-sm">#FF5602</div>
          </div>
          {/* Box 3: Text Dark */}
          <div className="p-4 rounded-xl shadow-md bg-white text-text-dark text-center">
            <div className="text-xl font-bold mb-2">Text Dark</div>
            <div className="text-sm">#022535</div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-kanit text-3xl mb-4 text-text-dark">
          การใช้งานฟอนต์ (Font Usage)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Heading Font Example */}
          <div className="p-6 bg-white rounded-3xl shadow-xl border border-primary-teal text-text-dark">
            <h3 className="font-kanit text-2xl mb-2 text-primary-teal">
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
          <div className="p-6 bg-primary-teal rounded-3xl shadow-xl border border-text-dark text-white">
            <h3 className="font-kanit text-2xl mb-2 text-text-dark">
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
        <h2 className="font-kanit text-3xl mb-4 text-text-dark">
          ตัวอย่างองค์ประกอบ (Component Examples)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* กล่องข้อมูลสำคัญ */}
          <div className="p-6 bg-white rounded-3xl shadow-xl border border-primary-teal">
            <h3 className="font-kanit text-2xl text-primary-teal mb-3">
              กล่องข้อมูลสำคัญ
            </h3>
            <p className="text-text-dark text-lg mb-4">
              ใช้สีขาวเป็นพื้นหลัง เพื่อดึงดูดความสนใจไปยังข้อมูลที่สำคัญ
              <br />
              (This box uses white for its background to highlight important
              information.)
            </p>
            <button className="bg-accent-orange text-white py-3 px-6 rounded-full font-bold hover:bg-orange-700 transitions duration-200 shadow-md">
              ปุ่มดำเนินการ
            </button>
          </div>
          {/* การแจ้งเตือน / คำเตือน */}
          <div className="p-6 bg-primary-teal rounded-3xl shadow-xl border border-text-dark">
            <h3 className="font-kanit text-2xl text-text-dark mb-3">
              การแจ้งเตือน / คำเตือน
            </h3>
            <p className="text-white text-lg mb-4">
              ใช้สีส้ม
              เพื่อแสดงการแจ้งเตือนหรือข้อมูลที่ต้องให้ความสนใจเป็นพิเศษ
              <br />
              (This box uses orange for alerts or special notices.)
            </p>
            <a href="#" className="text-primary-teal hover:underline font-bold">
              อ่านเพิ่มเติม
            </a>
          </div>
        </div>
      </section>

      {/* --- ตัวอย่างตาราง (ปรับให้เข้ากับธีมใหม่) --- */}
      <section className="mb-8">
        <h2 className="font-kanit text-3xl mb-4 text-text-dark">
          ตัวอย่างตาราง (Table Example)
        </h2>
        <div className="overflow-x-auto rounded-3xl shadow-xl border border-text-dark">
          <table className="min-w-full divide-y divide-primary-teal">
            <thead className="bg-text-dark">
              {/* Head in orange */}
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-kanit 
                  font-medium text-white uppercase tracking-wider"
                >
                  รายการ
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs 
                  font-kanit font-medium text-white uppercase tracking-wider"
                >
                  รายละเอียด
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs 
                  font-kanit font-medium text-white uppercase tracking-wider"
                >
                  สถานะ
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-kanit 
                  font-medium text-white uppercase tracking-wider"
                >
                  ราคา
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-primary-teal">
              {/* Body in white */}
              {/* Row 1 */}
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
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-accent-orange text-white">
                    พร้อมส่ง
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-dark">
                  1,200 ฿
                </td>
              </tr>
              {/* Row 2 */}
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
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-accent-orange text-white">
                    รอการชำระ
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-dark">
                  499 ฿
                </td>
              </tr>
              {/* Row 3 */}
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
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-primary-teal text-white">
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

      <footer className="text-center mt-12 text-foreground text-sm">
        <p>
          © {new Date().getFullYear()} Color Pattern Demo. All rights reserved.
        </p>
        <p className="mt-2">ออกแบบโดยใช้ Next.js และ Tailwind CSS</p>
      </footer>
    </main>
  );
}
