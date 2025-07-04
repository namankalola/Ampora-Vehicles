import Link from "next/link";

type LogoProps = {
  mobileMenuOpen?: boolean;
};

const Logo = ({ mobileMenuOpen }: LogoProps) => {
  return (
    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C24.8365 0 31.9999 7.1635 32 16C32 24.8366 24.8366 32 16 32C7.16345 32 0 24.8366 0 16C6.59715e-05 7.1635 7.16349 1.03087e-06 16 0ZM19.2266 7.84668C13.3737 -1.23551 4.96387 4.4209 4.96387 4.4209L4.95312 4.43164C9.94276 2.64465 13.3413 4.26944 15.3613 7.85059L6.39941 28.7998C7.10849 29.3327 7.86548 29.8049 8.65918 30.2158L9.79883 27.3643L10.4531 25.7236L16.1865 11.3867C16.8065 12.8498 17.3299 14.3513 17.8154 15.7148L20.4023 23.0693C20.3025 23.0611 14.4949 22.6011 10.3633 26.9697C10.4231 26.9413 16.9735 23.8465 21.6738 26.6768L21.916 27.3643L22.9834 30.3984C24.5203 29.6515 25.9173 28.6635 27.1309 27.4873L22.2275 14.418C21.787 13.1614 21.2992 11.8939 20.7412 10.6787C20.7338 10.6622 20.7261 10.6471 20.7188 10.6309C20.2703 9.65821 19.7764 8.71953 19.2266 7.84668Z" fill="#F3CA25" />
      </svg>

      <span
        className={`font-onest font-semibold text-2xl ${mobileMenuOpen ? "text-neutral-950" : "text-white"}`}
      >
        Ampora
      </span>
    </Link>
  );
};

export default Logo;
