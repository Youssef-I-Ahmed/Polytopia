import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import { useLanguage } from "../../../context/LanguageContext";
import collectionImg from "../../../assets/images/coll-doc.svg";
import sortingImg from "../../../assets/images/sort.svg";
import washingImg from "../../../assets/images/Wash-clean.svg";
import shreddingImg from "../../../assets/images/Shredding.svg";
import pelletizingImg from "../../../assets/images/pellet.svg";
import testingImg from "../../../assets/images/Qua-test-pack.svg";
const ProcessSection = () => {
  const { t } = useLanguage();
  const processSteps = t('home.processSteps');

  const stepIcons = [collectionImg, sortingImg, washingImg, shreddingImg, pelletizingImg, testingImg];

  return (
    <section id="process" className="section-padding bg-brand-950 text-white">
      <div className="shell">
        <SectionHeader
          eyebrow={t("home.processEyebrow")}
          title={t("home.processTitle")}
          titleClass="text-white"
          text={t("home.processText")}
          textClass="text-white/70"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => {
            const img = stepIcons[index];
            return (
              <div key={step.title} className="dark-card p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <img src={img} alt={step.title} className="h-7 w-7 object-contain" />
                </div>
                <h3 className="mt-3 text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
