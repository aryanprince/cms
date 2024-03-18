import Link from 'next/link';
import { getOauthUrl } from '../utiles/discord';
import { Button } from './ui/button';
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

export const JoinDiscord = ({
  isNavigated = true,
  isInMenu = false,
}: {
  isNavigated?: boolean;
  isInMenu?: boolean;
}) => {
  if (isNavigated) {
    return (
      <Link href={getOauthUrl()} target="_blank" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Join Discord
        </NavigationMenuLink>
      </Link>
    );
  }

  return (
    <Link href={getOauthUrl()} target="_blank" legacyBehavior passHref>
      <Button variant={isInMenu ? 'navLink' : 'link'} size={'sm'}>
        Join Discord
      </Button>
    </Link>
  );
};
