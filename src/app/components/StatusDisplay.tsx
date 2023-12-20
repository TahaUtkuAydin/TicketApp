export default function StatusDisplay({ status }) {
  const getColor = (status: string) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-200";
        return color;
      case "started":
        color = "bg-yellow-200";
        return color;
      case "not started":
        color = "bg-red-200";
        return color;
    }
    return color;
  };

  return (
    <div>
      <span
        className={`${getColor(
          status
        )} rounded-full text-gray-700 inline-block px-2 py-1 text-xs font-semibold `}
      >
        {status}
      </span>
    </div>
  );
}
