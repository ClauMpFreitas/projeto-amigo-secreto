import React, { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import { Moment } from 'moment';

type AppContextProps = {
  eventInfo: {
    nomeevento?: string;
    descricao?: string;
    datasorteio?: Moment | undefined;
    dataencontro?: Moment | undefined;
  };
  participants: string[];
  setEventInfo: Dispatch<SetStateAction<AppContextProps['eventInfo']>>;
  setParticipants: Dispatch<SetStateAction<string[]>>;
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [eventInfo, setEventInfo] = useState<AppContextProps['eventInfo']>({});
  const [participants, setParticipants] = useState<string[]>([]);

  return (
    <AppContext.Provider value={{ eventInfo, setEventInfo, participants, setParticipants }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};