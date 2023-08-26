// storageSession.js

export const storageSession = {
    getItem: key => {
      try {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (error) {
        console.error("Error getting item from session storage:", error);
        return null;
      }
    },
    setItem: (key, value) => {
      try {
        sessionStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error("Error setting item in session storage:", error);
      }
    },
    removeItem: key => {
      try {
        sessionStorage.removeItem(key);
      } catch (error) {
        console.error("Error removing item from session storage:", error);
      }
    }
  };
  