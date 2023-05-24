import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button2 } from './Button2/Button2';
import { Component1_Property1Default } from './Component1_Property1Default/Component1_Property1Default';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Ellipse3Icon } from './Ellipse3Icon.js';
import { Frame10Icon } from './Frame10Icon.js';
import { FrameIcon } from './FrameIcon.js';
import { IconArrowIosDownwardIcon2 } from './IconArrowIosDownwardIcon2.js';
import { IconArrowIosDownwardIcon3 } from './IconArrowIosDownwardIcon3.js';
import { IconArrowIosDownwardIcon } from './IconArrowIosDownwardIcon.js';
import { IconMouseIcon } from './IconMouseIcon.js';
import { IconPhotoImagePictureIcon2 } from './IconPhotoImagePictureIcon2.js';
import { IconPhotoImagePictureIcon } from './IconPhotoImagePictureIcon.js';
import { IconPlayCircleIcon } from './IconPlayCircleIcon.js';
import classes from './MainPage.module.css';
import { Rectangle4Icon } from './Rectangle4Icon.js';

interface Props {
  className?: string;
  hide?: {
    photo?: boolean;
  };
}
/* @figmaId 20:1059 */
export const MainPage: FC<Props> = memo(function MainPage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle5}></div>
      <div className={classes.logo2}>GRUPA40</div>
      <div className={classes.oNas}>O nas</div>
      <div className={classes.rezerwacje}>Rezerwacje</div>
      <div className={classes.news}>News</div>
      <div className={classes.frame7}>
        <div className={classes.oNas2}>O nas</div>
        <div className={classes.kariera}>Kariera</div>
        <div className={classes.kontakt}>Kontakt</div>
      </div>
      <div className={classes.frame8}>
        <div className={classes.sprawdzPokoje}>Sprawdź pokoje</div>
        <div className={classes.znajdzRezerwacje}>Znajdź rezerwację</div>
        <div className={classes.mojeKonto}>Moje konto</div>
      </div>
      <div className={classes.frame9}>
        <div className={classes.aktualnosci}>Aktualności</div>
        <div className={classes.wydarzeniaLokalne}>Wydarzenia lokalne</div>
        <div className={classes.blog}>Blog</div>
        <div className={classes.newsletter}>Newsletter</div>
      </div>
      <div className={classes.frame}>
        <FrameIcon className={classes.icon} />
      </div>
      <div className={classes.frame15}>
        <div className={classes.line1}></div>
        <div className={classes.group7}>
          <div className={classes.frame12}>
            <div className={classes.legalNotice}>Legal Notice</div>
            <div className={classes.ellipse1}>
              <Ellipse1Icon className={classes.icon2} />
            </div>
          </div>
          <div className={classes.frame11}>
            <div className={classes.privacyPolicy}>Privacy Policy</div>
            <div className={classes.ellipse2}>
              <Ellipse2Icon className={classes.icon3} />
            </div>
          </div>
          <div className={classes.frame13}>
            <div className={classes.cookiePreferences}>Cookie Preferences</div>
            <div className={classes.ellipse3}>
              <Ellipse3Icon className={classes.icon4} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame112}>
        <div className={classes.wyzywienie}>Wyżywienie</div>
        <div className={classes.loremIpsumDolorSitAmetConsecte}>
          <div className={classes.textBlock}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci est, aliquam vel metus at, elementum
            dapibus orci. Fusce tellus urna, ultrices vel metus at, fermentum laoreet lacus. Maecenas luctus vestibulum
            leo quis dapibus. Quisque placerat purus ut neque viverra, sed convallis risus rutrum.
          </div>
          <div className={classes.textBlock2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Curabitur orci est, aliquam vel metus at, elementum dapibus orci. Fusce tellus urna, ultrices vel
            metus at, fermentum laoreet lacus.
          </div>
          <div className={classes.textBlock3}>
            <p></p>
          </div>
        </div>
        <div className={classes.wiecej}>Więcej...</div>
      </div>
      <div className={classes.frame38}>
        <div className={classes.frame40}>
          <div className={classes.rectangle52}></div>
          <div className={classes.IconPlayCircle}>
            <IconPlayCircleIcon className={classes.icon5} />
          </div>
        </div>
      </div>
      <div className={classes.restauracja}>Restauracja</div>
      <div className={classes.frame10}>
        <Frame10Icon className={classes.icon6} />
      </div>
      <Component1_Property1Default
        className={classes.component1}
        classes={{ rectangle4: classes.rectangle4 }}
        hide={{
          photo: true,
        }}
      />
      <div className={classes.frame24}>
        <div className={classes.rezerwuj}>Rezerwuj</div>
      </div>
      <div className={classes.component2}>
        <div className={classes.frame72}>
          <div className={classes.rectangle42}></div>
          <div className={classes.frame82}>
            <div className={classes.xXXXXXXXXXXXX}>XXXXXXXXXXXXX</div>
            <div className={classes.xXXXXXXXXXXXXX}>XXXXXXXXXXXXXX</div>
          </div>
          <div className={classes.IconPhotoImagePicture}>
            <IconPhotoImagePictureIcon className={classes.icon7} />
          </div>
          <div className={classes.image3}></div>
        </div>
        <div className={classes.frame92}>
          <div className={classes._25}>25</div>
          <div className={classes.lip}>Lip</div>
        </div>
      </div>
      <div className={classes.component3}>
        <div className={classes.frame73}>
          <div className={classes.frame83}>
            <div className={classes.xXXXXXXXX}>XXXXXXXXX</div>
            <div className={classes.xXXXXXXXXXXX}>XXXXXXXXXXXX</div>
          </div>
          <div className={classes.frame39}>
            <div className={classes.rectangle43}></div>
          </div>
        </div>
        <div className={classes.frame93}>
          <div className={classes._26}>26</div>
          <div className={classes.lip2}>Lip</div>
        </div>
      </div>
      <div className={classes.wydarzenia}>Wydarzenia</div>
      <div className={classes.kontakt2}>Kontakt</div>
      <div className={classes.frame23}>
        <div className={classes.rectangle6}></div>
        <div className={classes.frame22}>
          <div className={classes.frame18}>
            <div className={classes.frame122}>
              <div className={classes.imie}>imię</div>
              <div className={classes.line12}></div>
            </div>
            <div className={classes.frame132}>
              <div className={classes.miasto}>miasto</div>
              <div className={classes.line2}></div>
            </div>
            <div className={classes.frame14}>
              <div className={classes.telefon}>telefon</div>
              <div className={classes.line3}></div>
            </div>
          </div>
          <div className={classes.frame19}>
            <div className={classes.frame152}>
              <div className={classes.nazwisko}>nazwisko</div>
              <div className={classes.line4}></div>
            </div>
            <div className={classes.frame16}>
              <div className={classes.kraj}>kraj</div>
              <div className={classes.line5}></div>
            </div>
            <div className={classes.frame17}>
              <div className={classes.eMail}>e-mail</div>
              <div className={classes.line6}></div>
            </div>
          </div>
          <div className={classes.frame20}>
            <div className={classes.rectangle7}></div>
            <div className={classes.wiadomosc}>wiadomość</div>
          </div>
          <div className={classes.frame21}>
            <div className={classes.wyslij}>Wyślij</div>
          </div>
        </div>
      </div>
      <div className={classes.oNas3}>O nas</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte2}>
        <div className={classes.textBlock4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci est, aliquam vel metus at, elementum
          dapibus orci. Fusce tellus urna, ultrices vel metus at, fermentum laoreet lacus. Maecenas luctus vestibulum
          leo quis dapibus. Quisque placerat purus ut neque viverra, sed convallis risus rutrum.
        </div>
        <div className={classes.textBlock5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Curabitur orci est, aliquam vel metus at, elementum dapibus orci. Fusce tellus urna, ultrices vel metus
          at, fermentum laoreet lacus.
        </div>
        <div className={classes.textBlock6}>
          <p></p>
        </div>
        <div className={classes.textBlock7}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci est, aliquam vel metus at, elementum
          dapibus orci. Fusce tellus urna, ultrices vel metus at, fermentum laoreet lacus. Maecenas luctus vestibulum
          leo quis dapibus. Quisque placerat purus ut neque viverra
        </div>
      </div>
      <div className={classes.frame113}>
        <div className={classes.odpoczynek}>Odpoczynek</div>
        <div className={classes.loremIpsumDolorSitAmetConsecte3}>
          <div className={classes.textBlock8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur orci est, aliquam vel metus at, elementum
            dapibus orci. Fusce tellus urna, ultrices vel metus at, fermentum laoreet lacus. Maecenas luctus vestibulum
            leo quis dapibus. Quisque placerat purus ut neque viverra, sed convallis risus rutrum.
          </div>
          <div className={classes.textBlock9}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
      </div>
      <div className={classes.naszePokoje}>Nasze Pokoje</div>
      <Button2 className={classes.button2} />
      <div className={classes.frame36}>
        <div className={classes.IconPhotoImagePicture2}>
          <IconPhotoImagePictureIcon2 className={classes.icon8} />
        </div>
        <div className={classes.frame37}>
          <div className={classes.image2}></div>
        </div>
        <div className={classes.frame382}>
          <div className={classes.image22}></div>
        </div>
      </div>
      <div className={classes.frame34}>
        <div className={classes.frame35}>
          <div className={classes.frame33}></div>
          <div className={classes.image1}></div>
          <div className={classes.frame3}>
            <div className={classes.wybierzPokoj}>Wybierz pokój</div>
            <div className={classes.wybierz}>Wybierz</div>
            <div className={classes.IconArrowIosDownward}>
              <IconArrowIosDownwardIcon className={classes.icon9} />
            </div>
          </div>
          <div className={classes.frame4}>
            <div className={classes.wjazd}>Wjazd</div>
            <div className={classes.IconArrowIosDownward2}>
              <IconArrowIosDownwardIcon2 className={classes.icon10} />
            </div>
            <div className={classes._23523}>23.05.23</div>
          </div>
          <div className={classes.frame5}>
            <div className={classes.wyjazd}>Wyjazd</div>
            <div className={classes._27523}>27.05.23</div>
          </div>
          <div className={classes.frame1}>
            <div className={classes.rezerwuj2}>Rezerwuj</div>
          </div>
          <div className={classes.frame6}>
            <div className={classes.scroll}>scroll</div>
            <div className={classes.IconMouse}>
              <IconMouseIcon className={classes.icon11} />
            </div>
            <div className={classes.down}>down</div>
          </div>
        </div>
      </div>
      <div className={classes.rectangle44}>
        <Rectangle4Icon className={classes.icon12} />
      </div>
      <div className={classes.logo3}>GRUPA40</div>
      <div className={classes.frame2}>
        <div className={classes.oNas4}>O nas</div>
        <div className={classes.pokoje}>Pokoje</div>
        <div className={classes.eventy}>Eventy</div>
        <div className={classes.kuchnia}>Kuchnia</div>
        <div className={classes.kontakt3}>Kontakt</div>
        <div className={classes.lang}>
          <div className={classes.IconArrowIosDownward3}>
            <IconArrowIosDownwardIcon3 className={classes.icon13} />
          </div>
          <div className={classes.pl}>pl</div>
        </div>
      </div>
    </div>
  );
});
