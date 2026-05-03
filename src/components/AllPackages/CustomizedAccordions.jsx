export default function CustomizedAccordions({ tourPlan }) {
  return (
    <div className="flex flex-col gap-3">
      {tourPlan?.map((item, idx) => (
        <div 
          key={idx} 
          className="collapse collapse-arrow bg-base-200 border border-base-200 rounded-xl hover:border-primary/30 transition-colors shadow-sm"
        >
          <input 
            type="radio" 
            name="tour-plan-accordion" 
            defaultChecked={idx === 0} 
          /> 
          <div className="collapse-title text-lg font-medium flex items-center gap-4 py-4">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider">
              Day {item?.day < 10 ? `0${item?.day}` : item?.day}
            </span>
            <span className="text-base-content font-semibold">
              Tour Plan Details
            </span>
          </div>
          <div className="collapse-content"> 
            <p className="text-base-content/70 italic pl-4 border-l-2 border-primary/20 ml-2 py-2 leading-relaxed">
              {item?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
