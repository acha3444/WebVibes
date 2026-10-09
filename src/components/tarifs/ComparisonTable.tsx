import { comparison, desktopOrder, getPlan, type Cell } from "@/data/tarifs";
import { CheckIcon } from "./icons";

// Tableau en 4 colonnes fixes : il tient dans la largeur d'un téléphone,
// sans défilement horizontal. L'en-tête reste visible sous l'en-tête du site.

function Value({ cell }: { cell: Cell }) {
  if (cell === true)
    return (
      <>
        <CheckIcon className="mx-auto w-4 h-4 text-electric" />
        <span className="sr-only">Inclus</span>
      </>
    );
  if (cell === false)
    return (
      <>
        <span aria-hidden className="text-ink/35">—</span>
        <span className="sr-only">Non inclus</span>
      </>
    );
  return <span className="text-xs sm:text-sm font-semibold leading-tight">{cell}</span>;
}

export function ComparisonTable() {
  const columns = desktopOrder.map(getPlan);

  return (
    <table className="w-full table-fixed border-collapse text-left">
      <caption className="sr-only">Comparatif détaillé des formules Essentiel, Standard et Premium</caption>
      <colgroup>
        <col className="w-[44%] sm:w-[46%]" />
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <td className="sticky top-[61px] sm:top-[73px] lg:top-[89px] z-10 bg-[#FCFBF8]" />
          {columns.map((plan) => (
            <th
              key={plan.id}
              scope="col"
              className={`sticky top-[61px] sm:top-[73px] lg:top-[89px] z-10 px-1 py-3 text-center text-xs sm:text-base font-bold border-b-2 border-ink ${
                plan.featured ? "bg-[#E9EDFC] text-electric" : "bg-[#FCFBF8]"
              }`}
            >
              {plan.name}
            </th>
          ))}
        </tr>
      </thead>

      {comparison.map((group) => (
        <tbody key={group.title}>
          <tr>
            <th scope="rowgroup" colSpan={4} className="pt-7 pb-2 font-serif text-lg font-bold text-ink">
              {group.title}
            </th>
          </tr>
          {group.rows.map((row) => (
            <Row key={row.label} row={row} columns={columns} />
          ))}
        </tbody>
      ))}
    </table>
  );
}

function Row({
  row,
  columns,
}: {
  row: (typeof comparison)[number]["rows"][number];
  columns: ReturnType<typeof getPlan>[];
}) {
  return (
    <>
      <tr className="border-t border-ink/10">
        <th scope="row" className="py-3 pr-3 text-[13px] min-[400px]:text-sm sm:text-[15px] font-medium leading-snug align-middle">
          {row.label}
          {row.note && <span aria-hidden className="text-electric"> *</span>}
        </th>
        {columns.map((plan) => (
          <td
            key={plan.id}
            className={`px-1 py-3 text-center align-middle ${plan.featured ? "bg-electric/[0.06]" : ""}`}
          >
            <Value cell={row.values[plan.id]} />
          </td>
        ))}
      </tr>
      {row.note && (
        <tr>
          <td colSpan={4} className="pb-3 pr-2 text-xs sm:text-sm text-ink/75 leading-snug">
            <span aria-hidden className="text-electric">* </span>
            {row.note}
          </td>
        </tr>
      )}
    </>
  );
}
