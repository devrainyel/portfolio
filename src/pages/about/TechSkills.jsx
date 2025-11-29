import { FrontendIcons } from "./FrontendIcons";
import { BackendIcons } from "./BackendIcons";
import { ToolsIcons } from "./ToolsIcons";

export function TechSkills() {
  return (
    <div className="flex flex-col gap-14">
      {/* Frontend */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <h3 className="md:col-span-5 text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left">
          FRONT-END
        </h3>
        <div className="md:col-span-7 flex flex-wrap justify-center md:justify-start gap-4">
          <FrontendIcons />
        </div>
      </div>

      {/* Backend */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <h3 className="md:col-span-5 text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left">
          BACK-END
        </h3>
        <div className="md:col-span-7 flex flex-wrap justify-center md:justify-start gap-4">
          <BackendIcons />
        </div>
      </div>

      {/* Tools */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <h3 className="md:col-span-5 text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left">
          TOOLS
        </h3>
        <div className="md:col-span-7 flex flex-wrap justify-center md:justify-start gap-4">
          <ToolsIcons />
        </div>
      </div>
    </div>
  );
};