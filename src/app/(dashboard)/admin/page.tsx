// import Announcements from "@/components/Announcements";
// import AttendanceChart from "@/components/AttendanceChart";
// import EventCalendar from "@/components/EventCalendar";
// import FinanceChart from "@/components/FinanceChart";
import CountChart from "@/components/charts/count-chart";
import UserCard from "@/components/user-card";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parent" />
          <UserCard type="Staff" />
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          <div className="w-full lg:w-2/3 h-[450px]">
            {/* <AttendanceChart /> */}
            AttendanceChart
          </div>
        </div>

        <div className="w-full h-[500px]">
          {/* <FinanceChart /> */}
          FinanceChart
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* <EventCalendar /> */}
        EventCalendar
        {/* <Announcements/> */}
        Announcements
      </div>
    </div>
  );
};

export default AdminPage;