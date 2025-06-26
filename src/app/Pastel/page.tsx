"use client"; // Client Component for Recharts

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

import "./Pastel.css"

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

// Helper function to safely get CSS variable value
// This handles potential SSR issues where window/document might not be defined
const getCssVar = (varName: string): string => {
  if (typeof window !== "undefined") {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
  }
  return ""; // Return empty string or a default fallback color if running on server
};

export default function Home() {
  // Get all necessary colors using the helper function
  const dashboardBackground = getCssVar("--color-dashboard-background");
  const widgetBackground = getCssVar("--color-widget-background");
  const primaryText = getCssVar("--color-primary-text");

  const chart2 = getCssVar("--color-chart-2");
  const chart3 = getCssVar("--color-chart-5");
  const chart4 = getCssVar("--color-chart-4");

  const semanticPositive = getCssVar("--color-semantic-positive");

  return (
    <main className="min-h-screen p-8 bg-dashboard-background text-primary-text">
      <h1 className="font-heading text-4xl mb-6 text-primary-text">
        Dashboard องค์กร
      </h1>

      {/* Color Palette Display */}
      <section className="mb-8 p-6 bg-widget-background rounded-lg shadow-md">
        <h2 className="font-heading text-3xl mb-4 text-primary-text">
          พาเลตสี (Color Palette)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-md shadow-sm bg-dashboard-background text-primary-text text-center">
            <div className="text-xl font-bold mb-2">Dashboard BG</div>
            <div className="text-sm">#E9EDF2</div>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-widget-background text-primary-text text-center">
            <div className="text-xl font-bold mb-2">Widget BG</div>
            <div className="text-sm">#FFFFFF</div>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-primary-text text-white text-center">
            <div className="text-xl font-bold mb-2">Primary Text</div>
            <div className="text-sm">#062A7A</div>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-secondary-text text-white text-center">
            <div className="text-xl font-bold mb-2">Secondary Text</div>
            <div className="text-sm">#5572AF</div>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-accent text-white text-center">
            <div className="text-xl font-bold mb-2">Accent Color</div>
            <div className="text-sm">#062A7A</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 rounded-md shadow-sm bg-semantic-positive text-white text-center">
            <div className="text-xl font-bold mb-2">Status: Positive</div>
            <div className="text-sm">#4AE9BD</div>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-semantic-negative text-white text-center">
            <div className="text-xl font-bold mb-2">Status: Negative</div>
            <div className="text-sm">#F9566E</div>
          </div>
          <div className="p-4 rounded-md shadow-sm bg-semantic-caution text-primary-text text-center">
            <div className="text-xl font-bold mb-2">Status: Caution</div>
            <div className="text-sm">#FFC935</div>
          </div>
        </div>
      </section>

      {/* Font Usage */}
      <section className="mb-8 p-6 bg-widget-background rounded-lg shadow-md">
        <h2 className="font-heading text-3xl mb-4 text-primary-text">
          การใช้งานฟอนต์ (Font Usage)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-dashboard-background rounded-md">
            <h3 className="font-heading text-2xl mb-2 text-primary-text">
              หัวข้อหลัก (Heading Font) - IBM Plex Sans Thai
            </h3>
            <p className="font-heading text-xl text-primary-text">
              นี่คือตัวอย่างข้อความที่ใช้ฟอนต์ IBM Plex Sans Thai
              เพื่อแสดงหัวข้อที่โดดเด่นและชัดเจน.
            </p>
          </div>
          <div className="p-4 border border-dashboard-background rounded-md">
            <h3 className="font-body text-2xl mb-2 text-primary-text">
              เนื้อหาทั่วไป (Body Font) - Sarabun
            </h3>
            <p className="font-body text-lg text-primary-text">
              นี่คือตัวอย่างข้อความที่ใช้ฟอนต์ Sarabun
              ซึ่งเหมาะสำหรับเนื้อหาทั่วไป ทำให้อ่านง่ายและสบายตา. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="mb-8 p-6 bg-widget-background rounded-lg shadow-md">
        <h2 className="font-heading text-3xl mb-4 text-primary-text">
          กราฟแสดงข้อมูล (Data Charts)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="w-full h-80 bg-widget-background p-4 rounded-md border border-dashboard-background">
            <h3 className="font-heading text-lg mb-2 text-primary-text">
              กราฟแท่ง (Bar Chart)
            </h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={barData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={dashboardBackground}
                />
                <XAxis dataKey="name" stroke={primaryText} />
                <YAxis stroke={primaryText} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: primaryText,
                    border: "none",
                    color: widgetBackground, // Text on tooltip is widget background (white)
                  }}
                />
                <Legend />
                <Bar
                  dataKey="Sales"
                  fill={chart2} // Chart 2: Bright Blue
                />
                <Bar
                  dataKey="Revenue"
                  fill={chart4} // Chart 4: Brown/Gold
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="w-full h-80 bg-widget-background p-4 rounded-md border border-dashboard-background">
            <h3 className="font-heading text-lg mb-2 text-primary-text">
              กราฟเส้น (Line Chart)
            </h3>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={lineData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={dashboardBackground}
                />
                <XAxis dataKey="name" stroke={primaryText} />
                <YAxis stroke={primaryText} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: primaryText,
                    border: "none",
                    color: widgetBackground,
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Value"
                  stroke={semanticPositive} // Semantic Positive Green
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Scatter Chart */}
          <div className="w-full h-80 bg-widget-background p-4 rounded-md border border-dashboard-background col-span-1 md:col-span-2">
            <h3 className="font-heading text-lg mb-2 text-primary-text">
              Scatter Chart
            </h3>
            <ResponsiveContainer width="100%" height="80%">
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={dashboardBackground}
                />
                <XAxis
                  type="number"
                  dataKey="x"
                  name="Stakes"
                  unit="pv"
                  stroke={primaryText}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  name="Profit"
                  unit="$"
                  stroke={primaryText}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  contentStyle={{
                    backgroundColor: primaryText,
                    border: "none",
                    color: widgetBackground,
                  }}
                />
                <Scatter
                  name="A school"
                  data={scatterData}
                  fill={chart3} // Chart 3: Light Blue
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="mb-8 p-6 bg-widget-background rounded-lg shadow-md">
        <h2 className="font-heading text-3xl mb-4 text-primary-text">
          ตารางแสดงข้อมูล (Data Table)
        </h2>
        <div className="overflow-x-auto rounded-md border border-dashboard-background">
          <table className="min-w-full divide-y divide-dashboard-background">
            <thead className="bg-widget-title-background">
              {" "}
              {/* Widget title background as table header background */}
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-heading font-medium text-primary-text uppercase tracking-wider"
                >
                  รายการ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-heading font-medium text-primary-text uppercase tracking-wider"
                >
                  สถานะ
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-heading font-medium text-primary-text uppercase tracking-wider"
                >
                  ยอดขาย
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-heading font-medium text-primary-text uppercase tracking-wider"
                >
                  ผลกำไร
                </th>
              </tr>
            </thead>
            <tbody className="bg-widget-background divide-y divide-dashboard-background">
              {/* Data Row 1 (Positive) */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-primary-text">
                  โปรเจกต์ X
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-semantic-positive text-white">
                    เสร็จสมบูรณ์
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-primary-text">
                  150,000 ฿
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-semantic-positive font-bold">
                  +15,000 ฿
                </td>
              </tr>
              {/* Data Row 2 (Negative) */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-primary-text">
                  แคมเปญ Y
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-semantic-negative text-white">
                    มีปัญหา
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-primary-text">
                  80,000 ฿
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-semantic-negative font-bold">
                  -5,000 ฿
                </td>
              </tr>
              {/* Data Row 3 (Caution) */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-primary-text">
                  สินค้า Z
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-semantic-caution text-primary-text">
                    รอตรวจสอบ
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-primary-text">
                  120,000 ฿
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-semantic-caution font-bold">
                  +/- 0 ฿
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="text-center mt-12 text-primary-text text-sm">
        <p>
          © {new Date().getFullYear()} Organization Dashboard. All rights
          reserved.
        </p>
        <p className="mt-2">ออกแบบโดยใช้ Next.js และ Tailwind CSS</p>
      </footer>
    </main>
  );
}
