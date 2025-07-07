import { use } from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface UserProfileProps {
  userDataPromise: Promise<UserData>;
}

/**
 * A component for displaying user profile information
 */
export default function UserProfile({ userDataPromise }: UserProfileProps) {
  const userData = use(userDataPromise);
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-3">{userData.name}</h3>
      <p className="text-gray-600 mb-2">Email: {userData.email}</p>
      <p className="text-gray-600">Role: {userData.role}</p>
    </div>
  );
}
