import type { TableColumn, TableRow, ThemeConfig } from "@/types";

interface DataTableProps {
  title: string;
  subtitle: string;
  columns: TableColumn[];
  rows: TableRow[];
  statuses: string[];
  theme: ThemeConfig;
}

function getStatusClass(status: string) {
  const value = status.toLowerCase();

  if (
    value.includes("completed") ||
    value.includes("paid") ||
    value.includes("available") ||
    value.includes("active") ||
    value.includes("won") ||
    value.includes("published") ||
    value.includes("featured") ||
    value.includes("funded") ||
    value.includes("ready") ||
    value.includes("resolved") ||
    value.includes("scheduled") ||
    value.includes("confirmed") ||
    value.includes("in stock")
  ) {
    return "bg-emerald-50 text-emerald-700";
  }

  if (
    value.includes("pending") ||
    value.includes("draft") ||
    value.includes("limited") ||
    value.includes("upcoming") ||
    value.includes("in progress") ||
    value.includes("preparing") ||
    value.includes("low stock") ||
    value.includes("at risk") ||
    value.includes("urgent") ||
    value.includes("paused") ||
    value.includes("reorder")
  ) {
    return "bg-amber-50 text-amber-700";
  }

  if (
    value.includes("failed") ||
    value.includes("overdue") ||
    value.includes("lost") ||
    value.includes("refunded") ||
    value.includes("cancelled") ||
    value.includes("voided") ||
    value.includes("out of stock") ||
    value.includes("retired") ||
    value.includes("expired") ||
    value.includes("blocked") ||
    value.includes("missed") ||
    value.includes("no show") ||
    value.includes("broken") ||
    value.includes("appealed")
  ) {
    return "bg-rose-50 text-rose-700";
  }

  return "bg-slate-100 text-slate-600";
}

function formatCellValue(column: TableColumn, row: TableRow) {
  const value = row[column.key];

  if (column.key === "status") {
    return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusClass(value)}`}>{value}</span>;
  }

  if (column.key.includes("url") && value.startsWith("http")) {
    return (
      <a className="font-medium text-slate-950 underline decoration-slate-300 underline-offset-4" href={value} target="_blank" rel="noreferrer">
        {value.replace(/^https?:\/\//, "")}
      </a>
    );
  }

  return <span className="text-slate-700">{value}</span>;
}

export function DataTable({ title, subtitle, columns, rows, statuses, theme }: DataTableProps) {
  return (
    <section
      id="records"
      className="overflow-hidden rounded-[2rem] border bg-white"
      style={{
        borderColor: theme.border,
        boxShadow: `0 28px 60px -46px ${theme.borderStrong}`,
      }}
    >
      <div className="flex flex-col gap-5 border-b px-6 py-6 md:flex-row md:items-end md:justify-between" style={{ borderColor: theme.border }}>
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em]" style={{ color: theme.primary }}>
            Data Preview
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {statuses.slice(0, 4).map((status) => (
            <span key={status} className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(status)}`}>
              {status}
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200/80 text-left">
          <thead style={{ backgroundColor: theme.surfaceStrong }}>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="whitespace-nowrap px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/70">
            {rows.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-slate-50/80">
                {columns.map((column) => (
                  <td key={column.key} className="whitespace-nowrap px-6 py-4 text-sm">
                    {formatCellValue(column, row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
