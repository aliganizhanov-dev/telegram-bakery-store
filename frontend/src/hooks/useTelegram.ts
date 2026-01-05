import { useEffect, useState } from 'react';

export const useTelegram = () => {
  const [tg, setTg] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const telegram = window.Telegram?.WebApp;
    if (telegram) {
      telegram.ready();
      telegram.expand();
      setTg(telegram);
      setUser(telegram.initDataUnsafe?.user);
    }
  }, []);

  const onClose = () => {
    tg?.close();
  };

  const sendData = (data: any) => {
    tg?.sendData(JSON.stringify(data));
  };

  return {
    tg,
    user,
    onClose,
    sendData,
  };
};
