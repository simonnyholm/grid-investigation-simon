import { useState } from 'react';
import './App.css';
import { COLUMNS } from './components/Columns.jsx'
import dataJson from './data.json'
import GenericTable from './components/GenericTable';
import { useTranslation } from "react-i18next";

const flatData = dataJson.flatMap((transactionGroup) => transactionGroup.transactions);


function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('da')

  function switchToEnglish() {
    setLang((currentLang) => {
      const nextLang = (currentLang === 'da') ? 'en' : 'da';
      i18n.changeLanguage(nextLang);
      return nextLang;
    });
  }

  return (
    <div style={{padding: "15px"}}>
      <button onClick={switchToEnglish}>{ t("button.switchLanguage") }</button>
    <GenericTable data={flatData} columns={COLUMNS(t)} groupBy={['']}/>
    </div>
  );
}

export default App;
