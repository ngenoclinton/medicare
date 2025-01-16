import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

// import { PasskeyModal } from "@/components/PasskeyModal";

const Home = async ({searchParams}: SearchParamProps) => {
  const isAdmin = await searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {/* {isAdmin && <PasskeyModal />} */}

      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex justify-start space-x-3">
          <Image
            src="/assets/icons/medicare-logo.avif"
            height={100}
            width={80}
            alt="MediCare logo"
            className="mb-12 h-9 w-fit rounded-full"
          /> 
          <span className="flex justify-center items-start align-middle text-xl ">MediCare</span>
          </div>

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 MediCare
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin 
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/medical-team.avif"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Home;