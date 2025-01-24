import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const user = await getUser();


  if (!(await isAuthenticated())) {
    redirect(`/api/auth/login?post_login_redirect_url=/profile`);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-gray px-4 py-8">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg space-y-6">
        <h1 className="text-3xl font-semibold text-center text-black">
          Welcome to your profile!
        </h1>
        <div className="p-6 bg-black text-white">
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <ul className="mt-2">
            <li>Email: johndoe@example.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Location: San Francisco, CA, USA</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
