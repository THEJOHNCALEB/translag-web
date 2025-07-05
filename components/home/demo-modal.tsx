import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { Languages } from "lucide-react";

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <Languages className="h-10 w-10 text-blue-600" />
          <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Translag</h3>
          <p className="text-sm text-gray-500">
            Join the waitlist to get early access to Translag - Your AI-powered African language translator.
          </p>
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-blue-500 py-2">
              <input 
                className="appearance-none bg-transparent border-transparent w-full h-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-blue-500 focus:ring-0" 
                type="email" 
                placeholder="your-email@domain.com" 
                aria-label="Email"
              />
              <button 
                className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded focus:outline-none transition-colors" 
                type="button"
              >
                Join Waitlist
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-400 mt-2">
            We'll notify you when Translag is ready for launch.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
