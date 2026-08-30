const AccountToggle = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-black">
      <button className="account flex hover:bg-stone-300 relative transition-colors p-0.5 gap-2 w-full items-center rounded ">
        <i className="ri-user-2-fill"></i>
        <div className="text-start">
          <span className="text-sm font-bold block">Rohit Singh</span>
          <span className="text-xs block text-stone-600">singhrohit@mail</span>
        </div>
        <i className="updown ri-expand-up-down-line"></i>
      </button>
    </div>
  );
};

export default AccountToggle;
