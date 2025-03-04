import '@styles/utils.scss';
import Link from 'next/link';
import Logout from '@auth/logout/components/Logout';

export default function Home() {
    return (
      <>
        <h2>
          HOME PRINCIPAL
        </h2>
        <Logout/>
      </>
    );
}
