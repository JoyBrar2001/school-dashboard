export default function UserCard({
  type
}: {
  type: string;
}) {
  return (
    <div className="rounded-2xl odd:bg-purple even:bg-yellow">User Card</div>
  );
}