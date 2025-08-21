import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUpload, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';

const MetersToolbar = () => {
  return (
    <div className="flex justify-between items-center mb-5 flex-wrap gap-4">
      <div className="relative">
        <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" />
        <Input
          type="search"
          placeholder="Search by meter number or customer..."
          className="pl-10 pr-4 py-2.5 w-80 text-sm"
        />
      </div>
      <div className="flex gap-3">
        <Button>
          <FontAwesomeIcon icon={faUpload} className="mr-2" />
          Bulk Import
        </Button>
        <Button>
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add New Meter
        </Button>
      </div>
    </div>
  );
};

export default MetersToolbar;
