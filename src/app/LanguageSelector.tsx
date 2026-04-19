"use client";

import { useState } from "react";

export default function LanguageSelector() {
  const [lang, setLang] = useState("en");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);

    // OPTIONAL: redirect or load translated content
    // router.push(`/${newLang}`);
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="language" className="text-sm font-medium">
        Language
      </label>

      <select
        id="language"
        value={lang}
        onChange={handleChange}
        className="aero-input px-2 py-1"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}
