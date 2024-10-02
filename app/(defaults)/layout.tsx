import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import MainContainer from "@/components/layout/main-container";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative">
        <MainContainer>
          <div className="main-content flex flex-col dark:bg-dark-main pt-20">
            <Header />
            {children}
            <Footer />
          </div>
        </MainContainer>
      </div>
    </>
  );
}
