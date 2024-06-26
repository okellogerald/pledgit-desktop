import { CampaignsCard } from "../campaign/homepage_card/card";
import { ContactsCard } from "../contact/homepage_card/card";
import { PaymentsCard } from "../payments/homepage_card/card";
import { PledgesCard } from "../pledge/homepage_card/card";

import styles from "./styles.module.css";

export function HomeView() {
  return (
    <>
      <div className={styles.scaffold}>
        <div className={styles.body}>
          <PledgesCard />
          <CampaignsCard />
          <ContactsCard />
          <PaymentsCard />
        </div>
      </div>
    </>
  );
}
