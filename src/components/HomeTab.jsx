import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {cards} from "./data.js"

const HomeTab = () => {
  const styles = {
    HorizontalDivider: {
      top: '153px',
      left: '32px',
      width: '74px',
      height: '2px',
      backgroundColor: '#d3d3d3',
      borderRadius: '2px',
    },
  };
  const [activeTab, setActiveTab] = useState('Tab1');

  return (
    <div>
      <div className="flex space-x-4 mt-12">
        <button
          className={`py-2 px-4`}
          onClick={() => setActiveTab('Tab1')}
        >
          Medic
          {activeTab === 'Tab1' && <div style={styles.HorizontalDivider} />}
        </button>
        <button
          className={`py-2 px-4`}
          onClick={() => setActiveTab('Tab2')}
        >
          Medicat
          {activeTab === 'Tab2' && <div style={styles.HorizontalDivider} />}
        </button>
        <button
          className={`py-2 px-4`}
          onClick={() => setActiveTab('Tab3')}
        >
          Dosage
          {activeTab === 'Tab3' && <div style={styles.HorizontalDivider} />}
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'Tab1' && <Tab1 />}
        {activeTab === 'Tab2' && <Tab2 />}
        {activeTab === 'Tab3' && <Tab3 />}
      </div>
    </div>
  );
};


const Tab1 = () => {
          
    // const [cards, setCards] = useState(initialCards);
    // const [nextId, setNextId] = useState(cards.length + 1);

    const styles = {
      Button: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '543px',
        left: '236px',
        width: '48px',
        height: '48px',
        border: '1px solid #030303',
        boxSizing: 'border-box',
        boxShadow: '2px 2px 0px rgba(0,0,0,0.8)',
        color: '#030303',
        backgroundColor: '#f82c7f',
        outline: 'none',
      },
      Icon: {
        color: '#030303',
        fill: '#030303',
        width: '18px',
        height: '18px',
        fontSize: '18px',
      },
    };
  
    // const addNewCard = () => {
    //   const newCard = { id: nextId, name: `Card ${nextId}` };
    //   setCards([...cards, newCard]);
    //   setNextId(nextId + 1);
    // };
  
    const getCardWidth = (index) => {
        const row = Math.floor(index / 2);
        return row % 2 === 0 ? (index % 2 === 0 ? '55%' : '45%') : (index % 2 === 0 ? '45%' : '55%');
      };
    return (
        <div className="flex flex-wrap gap-2 w-full px-4 pb-20">
        {cards.map((card, index) => (
          <div key={card.id} className="" style={{ width: `calc(${getCardWidth(index)} - 8px)` }}>
            <Card>{card.name}</Card>
          </div>
        ))}
        <div className="flex items-center justify-center" style={{ width: `calc(${getCardWidth(cards.length)} - 8px)` }}>
        <Link
          to='/add-item'
          style={styles.Button}
        >
          <svg style={styles.Icon} viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
            </path>
          </svg>
        </Link>
      </div>
      </div>
    );
  };

const Tab2 = () => <div>Tab 2 Content</div>;

const Tab3 = () => <div>Tab 3 Content</div>;

const Card = ({ children }) => {
  const styles = {
    Card: {
      height: '150px',
      borderRadius: '2px',   
    },
  };
  return (
    <div style={styles.Card} className='bg-[#f8d3e2] hover:bg-[#f82c7f] p-4'>
      {children}
    </div>
  );
};

export default HomeTab;
