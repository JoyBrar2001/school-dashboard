import UserCard from "@/components/user-card";

export default function AdminPage() {
  return (
    <main className="flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>

      <div className="w-full lg:w-1/3">r</div>
    </main>
  );
}