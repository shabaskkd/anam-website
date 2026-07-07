import { FiDownload } from "react-icons/fi";

export default function DownloadButton() {
  return (
    <div className="z-50 group">
      <a
        href="/assets/anam-2026-company-profile.pdf"
        download
        className="
          flex items-center 
          bg-[#5a0f2f] text-white 
          rounded-full 
          overflow-hidden 
          shadow-lg 
          transition-all duration-300 ease-in-out
          w-16 hover:!w-70
        "
      >
        {/* Icon */}
        <div className="flex items-center justify-center h-16 w-16  shrink-0">
          <FiDownload size={20} />
        </div>

        {/* Text (hidden initially, visible on hover) */}
        <span
          className="
            whitespace-nowrap 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity duration-300
            pr-5
          "
        >
          Download Company Profile
        </span>
      </a>
    </div>
  );
}
