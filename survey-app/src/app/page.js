import GeneralInformation from "@/forms/GeneralInformation";
import SafetyAndTrust from "@/forms/SafetyAndTrust";
import IdentityAndBelonging from "@/forms/IdentityAndBelonging";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Survey App</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-black rounded-lg p-4">
            <IdentityAndBelonging />
          </div>
        </div>
      </main>
    </div>
  );
}
