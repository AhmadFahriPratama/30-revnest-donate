"use client";

import { Search, X } from "lucide-react";
import { useDeferredValue, useState } from "react";
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
  const [query, setQuery] = useState("");
  const [activeStatus, setActiveStatus] = useState("All");
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const filteredRows = rows.filter((row) => {
    const statusMatch = activeStatus === "All" || row.status === activeStatus;
    const queryMatch =
      normalizedQuery.length === 0 ||
      Object.values(row).some((value) => value.toLowerCase().includes(normalizedQuery));

    return statusMatch && queryMatch;
  });

  return (
    <section
      id="records"
      className="overflow-hidden rounded-[2rem] border bg-white"
      style={{
        borderColor: theme.border,
        boxShadow: `0 28px 60px -46px ${theme.borderStrong}`,
      }}
    >
      <div className="flex flex-col gap-5 border-b px-6 py-6" style={{ borderColor: theme.border }}>
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em]" style={{ color: theme.primary }}>
              Data Preview
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{subtitle}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label
              className="group flex min-w-[240px] items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm transition-colors"
              style={{ borderColor: theme.border }}
            >
              <Search className="h-4 w-4 text-slate-400 transition-colors group-focus-within:text-slate-700" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search records"
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
            </label>

            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveStatus("All");
              }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
            >
              Reset
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {["All", ...statuses].map((status) => {
              const active = activeStatus === status;

              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => setActiveStatus(status)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${active ? "text-white shadow-sm" : `${getStatusClass(status)} hover:brightness-95`}`}
                  style={active ? { backgroundImage: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)` } : undefined}
                >
                  {status}
                </button>
              );
            })}
          </div>

          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
            Showing {filteredRows.length} of {rows.length} rows
          </div>
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
            {filteredRows.length > 0 ? (
              filteredRows.map((row) => (
                <tr key={row.id} className="transition-colors hover:bg-slate-50/80">
                  {columns.map((column) => (
                    <td key={column.key} className="whitespace-nowrap px-6 py-4 text-sm">
                      {formatCellValue(column, row)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center text-sm text-slate-500">
                  No rows match the current search and status filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
