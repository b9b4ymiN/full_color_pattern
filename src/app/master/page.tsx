// app/page.tsx
"use client"; // Client Component for Recharts
import "./master.css";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample Data for Charts
const barData = [
  { name: "Q1", Sales: 4000, Revenue: 2400 },
  { name: "Q2", Sales: 3000, Revenue: 1398 },
  { name: "Q3", Sales: 2000, Revenue: 9800 },
  { name: "Q4", Sales: 2780, Revenue: 3908 },
];

const lineData = [
  { name: "Jan", Value: 100 },
  { name: "Feb", Value: 300 },
  { name: "Mar", Value: 200 },
  { name: "Apr", Value: 400 },
  { name: "May", Value: 250 },
  { name: "Jun", Value: 350 },
];

const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
];

const getCssVar = (varName: string): string => {
  if (typeof window !== "undefined") {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
  }
  return ""; // Return empty string or default color for server-side rendering
};

export default function Home() {
  // Get colors using the helper function
  const primaryGray = getCssVar("--color-primary-gray");
  const secondaryGray = getCssVar("--color-secondary-gray");
  const accentRed = getCssVar("--color-accent-red");
  const neutralWhite = getCssVar("--color-neutral-white");
  const subtleBlue = getCssVar("--color-subtle-blue");
  const statusPositive = getCssVar("--color-status-positive");
 

  return (
    <main className="min-h-screen p-8 bg-background text-foreground">
      <h1 className="font-heading text-4xl mb-6 text-primary-gray">
        Dashboard องค์กร
      </h1>

      {/* Color Palette Display */}
      <section className="mb-8 p-6 bg-neutral-white rounded-lg shadow-md">
        <h2 className="font-heading text-3xl mb-4 text-primary-gray">
          พาเลตสี (Color Palette)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-md shadow-sm bg-primary-gray text-neutral-white text-center">
            <div className="text-xl font-bold mb-2">Primary Gray</div>
            <div className="text-sm">#4A4A4A</div>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-secondary-gray text-primary-gray text-center">
            <div className="text-xl font-bold mb-2">Secondary Gray</div>
            <div className="text-sm">#E0E0E0</div>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-accent-red text-neutral-white text-center">
            <div className="text-xl font-bold mb-2">Accent Red</div>
            <div className="text-sm">#D32F2F</div>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-subtle-blue text-neutral-white text-center">
            <div className="text-xl font-bold mb-2">Subtle Blue</div>
            <div className="text-sm">#3F51B5</div>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-neutral-white text-primary-gray text-center">
            <div className="text-xl font-bold mb-2">Neutral White</div>
            <div className="text-sm">#FFFFFF</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 rounded-md shadow-sm bg-status-positive text-white text-center">
            <div className="text-xl font-bold mb-2">Status: Positive</div>
            <div className="text-sm">#4CAF50</div>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-status-negative text-white text-center">
            <div className="text-xl font-bold mb-2">Status: Negative</div>
            <div className="text-sm">#D32F2F</div>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-status-caution text-text-dark text-center">
            <div className="text-xl font-bold mb-2">Status: Caution</div>
            <div className="text-sm">#FFC107</div>
          </div>
        </div>
      </section>

      {/* Font Usage */}
      <section className="mb-8 p-6 bg-neutral-white rounded-lg shadow-md">
        <h2 className="font-heading text-3xl mb-4 text-primary-gray">
          การใช้งานฟอนต์ (Font Usage)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-secondary-gray rounded-md">
            <h3 className="font-heading text-2xl mb-2 text-primary-gray">
              หัวข้อหลัก (Heading Font) - IBM Plex Sans Thai
            </h3>
            <p className="font-heading text-xl text-primary-gray">
              นี่คือตัวอย่างข้อความที่ใช้ฟอนต์ IBM Plex Sans Thai
              เพื่อแสดงหัวข้อที่โดดเด่นและชัดเจน.
            </p>
          </div>
          <div className="p-4 border border-secondary-gray rounded-md">
            <h3 className="font-body text-2xl mb-2 text-primary-gray">
              เนื้อหาทั่วไป (Body Font) - Sarabun
            </h3>
            <p className="font-body text-lg text-primary-gray">
              นี่คือตัวอย่างข้อความที่ใช้ฟอนต์ Sarabun
              ซึ่งเหมาะสำหรับเนื้อหาทั่วไป ทำให้อ่านง่ายและสบายตา. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      {/* Charts Section */}
      <section className="mb-8 p-6 bg-neutral-white rounded-lg shadow-md">
        <h2 className="font-heading text-3xl mb-4 text-primary-gray">
          กราฟแสดงข้อมูล (Data Charts)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="w-full h-80 bg-color-neutral-white p-4 rounded-md border border-color-secondary-gray">
            <h3 className="font-heading text-lg mb-2 text-color-primary-gray">
              กราฟแท่ง (Bar Chart)
            </h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke={secondaryGray} />
                <XAxis dataKey="name" stroke={primaryGray} />
                <YAxis stroke={primaryGray} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: primaryGray,
                    border: "none",
                    color: neutralWhite,
                  }}
                />
                <Legend />
                <Bar dataKey="Sales" fill={subtleBlue} />
                <Bar dataKey="Revenue" fill={accentRed} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="w-full h-80 bg-color-neutral-white p-4 rounded-md border border-color-secondary-gray">
            <h3 className="font-heading text-lg mb-2 text-color-primary-gray">
              กราฟเส้น (Line Chart)
            </h3>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke={secondaryGray} />
                <XAxis dataKey="name" stroke={primaryGray} />
                <YAxis stroke={primaryGray} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: primaryGray,
                    border: "none",
                    color: neutralWhite,
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Value"
                  stroke={statusPositive}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Scatter Chart */}
          <div className="w-full h-80 bg-color-neutral-white p-4 rounded-md border border-color-secondary-gray col-span-1 md:col-span-2">
            <h3 className="font-heading text-lg mb-2 text-color-primary-gray">
              Scatter Chart
            </h3>
            <ResponsiveContainer width="100%" height="80%">
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={secondaryGray} />
                <XAxis
                  type="number"
                  dataKey="x"
                  name="Stakes"
                  unit="pv"
                  stroke={primaryGray}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  name="Profit"
                  unit="$"
                  stroke={primaryGray}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  contentStyle={{
                    backgroundColor: primaryGray,
                    border: "none",
                    color: neutralWhite,
                  }}
                />
                <Scatter name="A school" data={scatterData} fill={subtleBlue} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="mb-8 p-6 bg-neutral-white rounded-lg shadow-md">
        <h2 className="font-heading text-3xl mb-4 text-primary-gray">
          ตารางแสดงข้อมูล (Data Table)
        </h2>
        <div className="overflow-x-auto rounded-md border border-secondary-gray">
          <table className="min-w-full divide-y divide-secondary-gray">
            <thead className="bg-primary-gray">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-heading font-medium text-neutral-white uppercase tracking-wider"
                >
                  รายการ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-heading font-medium text-neutral-white uppercase tracking-wider"
                >
                  สถานะ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-heading font-medium text-neutral-white uppercase tracking-wider"
                >
                  ยอดขาย
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-heading font-medium text-neutral-white uppercase tracking-wider"
                >
                  ผลกำไร
                </th>
              </tr>
            </thead>
            <tbody className="bg-neutral-white divide-y divide-secondary-gray">
              {/* Data Row 1 (Positive) */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-primary-gray">
                  โปรเจกต์ X
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-status-positive text-white">
                    เสร็จสมบูรณ์
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-primary-gray">
                  150,000 ฿
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-status-positive font-bold">
                  +15,000 ฿
                </td>
              </tr>
              {/* Data Row 2 (Negative) */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-primary-gray">
                  แคมเปญ Y
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-status-negative text-white">
                    มีปัญหา
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-primary-gray">
                  80,000 ฿
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-status-negative font-bold">
                  -5,000 ฿
                </td>
              </tr>
              {/* Data Row 3 (Caution) */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-primary-gray">
                  สินค้า Z
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-status-caution text-text-dark">
                    รอตรวจสอบ
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-primary-gray">
                  120,000 ฿
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-status-caution font-bold">
                  +/- 0 ฿
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="text-center mt-12 text-primary-gray text-sm">
        <p>
          © {new Date().getFullYear()} Organization Dashboard. All rights
          reserved.
        </p>
        <p className="mt-2">ออกแบบโดยใช้ Next.js และ Tailwind CSS</p>
      </footer>
    </main>
  );
}
