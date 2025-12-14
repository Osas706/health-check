const SummaryDetail = ({ label, value }: { label: string; value?: string | number }) => {
  return (
    <div className="flex justify-between gap-4 border-b border-slate-200 pb-2 last:border-none">
      <span className="text-slate-500">{label}</span>
      
      <span className="font-medium text-slate-800 text-right">
        {value && value !== "" ? value : "—"}
      </span>
    </div>
  );
};
export default SummaryDetail;
