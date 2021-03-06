import Link from 'next/link';
import Button from '@/components/Button';
import EcommerceSite from '@/components/EcommerceSite';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Layout from '@/components/Layout';

library.add(fab, faPhone, faMapMarkerAlt);

const Home = () => {
  return (
    <Layout>
      <section className="px-4 h-auto overflow-hidden md:px-44">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col justify-center mb-10 md:justify-start md:mb-0">
            <h1 className="mb-4 leading-normal w-full md:w-40-em">
              <div className="whitespace-nowrap text-center md:text-left">
                Modern
              </div>
              <div className="whitespace-nowrap text-center md:text-left">
                web apps
              </div>
              <div className="whitespace-nowrap text-center md:text-left">
                built faster
              </div>
            </h1>
            <p className="text-2xl font-serif text-center md:w-80-em md:text-justify">
              Everything you need to build and boost your online presence.
              Providing solutions for ecoomerce sites, web and mobile apps, AI
              powered web tools to meet your business needs.
            </p>
            <ul className="mt-6 flex flex-col items-center md:flex-row">
              <li>
                <Button variant="contained" primary>
                  Get Started
                </Button>
              </li>
              <li className="flex mt-4 md:mt-0 md:ml-4">
                <Link href="#">
                  <a className="flex">
                    <span className="underline hover:no-underline">
                      Questions? Talk to an expert
                    </span>
                    <span className="material-icons ml-1 text-blue-700 text-base">
                      arrow_forward
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <div className="w-full h-96 rounded-lg shadow bg-white flex justify-center items-center overflow-hidden">
              <EcommerceSite />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
