import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1_Property1Default.module.css';
import { PhotoIcon } from './PhotoIcon.js';

interface Props {
  className?: string;
  classes?: {
    rectangle4?: string;
    root?: string;
  };
  hide?: {
    photo?: boolean;
  };
}
/* @figmaId 13:47 */
export const Component1_Property1Default: FC<Props> = memo(function Component1_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame7}>
        <div className={`${props.classes?.rectangle4 || ''} ${classes.rectangle4}`}></div>
        <div className={classes.frame8}>
          <div className={classes.xXXXXXXXXXXXX}>XXXXXXXXXXXXX</div>
          <div className={classes.xXXXXXXXXXXXX2}>XXXXXXXXXXXXX</div>
        </div>
        {!props.hide?.photo && (
          <div className={classes.photo}>
            <PhotoIcon className={classes.icon} />
          </div>
        )}
      </div>
      <div className={classes.frame9}>
        <div className={classes._24}>24</div>
        <div className={classes.lip}>Lip</div>
      </div>
    </div>
  );
});
