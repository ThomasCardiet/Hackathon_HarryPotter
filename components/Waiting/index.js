import React from 'react';
import Link from 'next/link';
import { Oval } from 'react-loader-spinner';
import { Router } from '@/router';

export const Waiting = () => {
  return (
    <div className={'waiting-block'}>
      <Oval
        height={100}
        width={100}
        color="#F9C749"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="##FFEBB8"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
      <Link
        href={Router.getRoutes().CHOICE.slug}
        className={'waiting-block__link btn-reset btn-red btn-little'}
      >
        Quitter
      </Link>
    </div>
  );
};
