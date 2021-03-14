import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parse, parseISO, subDays } from "date-fns";

const data = [];

export default function Home() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
