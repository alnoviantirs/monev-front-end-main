const InfoCard = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-[16px] p-4 shadow-md w-full px-12">
      <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
        {/* Workshop Card (Left-aligned) */}
        <div className="flex items-center w-full sm:w-1/3 sm:justify-start">
          <div className="bg-[#ffefc2] p-2 w-12 h-12 rounded-[8px] flex justify-center items-center">
            <i className="ph ph-gear text-[#f1a13b] text-3xl"></i>
          </div>
          <div className="ml-3">
            <h1 className="text-[16px] font-bold text-[#333]">5.000</h1>
            <p className="text-[12px] text-[#777]">Total Workshop</p>
          </div>
        </div>

        {/* Conference/Seminar Card (Centered) */}
        <div className="flex items-center w-full sm:w-1/3 sm:justify-center">
          <div className="bg-[#c2f9ef] p-2 w-12 h-12 rounded-[8px] flex justify-center items-center">
            <i className="ph ph-lightbulb text-[#57e09e] text-3xl"></i>
          </div>
          <div className="ml-3">
            <h1 className="text-[16px] font-bold text-[#333]">10.000</h1>
            <p className="text-[12px] text-[#777]">Total Conference/Seminar</p>
          </div>
        </div>

        {/* Training Card (Right-aligned) */}
        <div className="flex items-center w-full sm:w-1/3 sm:justify-end">
          <div className="bg-[#f3e7c1] p-2 w-12 h-12 rounded-[8px] flex justify-center items-center">
            <i className="ph ph-graduation-cap text-[#f39c12] text-3xl"></i>
          </div>
          <div className="ml-3">
            <h1 className="text-[16px] font-bold text-[#333]">8.000</h1>
            <p className="text-[12px] text-[#777]">Total Training</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
