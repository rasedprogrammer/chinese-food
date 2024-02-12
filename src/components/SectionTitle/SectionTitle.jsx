const SectionTitle = ({ subHeading, header }) => {
  return (
    <div className="w-4/12 mx-auto text-center mb-8">
      <p className="text-[#D99904] text-[20px] mb-2">---{subHeading}---</p>
      <h3 className="text-[40px] uppercase border-y-4 py-2">{header}</h3>
    </div>
  );
};

export default SectionTitle;
