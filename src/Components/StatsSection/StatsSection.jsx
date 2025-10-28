function StatsSection() {
  const stats = [
    { value: "70%", label: "Job Achievements" },
    { value: "+24", label: "Job Achievements" },
    { value: "$8.4m", label: "Job Achievements" },
    { value: "1.6K", label: "Job Achievements" },
  ];

  return (
    <section className="flex justify-center items-center py-10 my-5">
      <div className="bg-white shadow-sm rounded-2xl px-10 py-8 flex flex-col sm:flex-row justify-between items-center gap-8 w-full max-w-6xl">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
