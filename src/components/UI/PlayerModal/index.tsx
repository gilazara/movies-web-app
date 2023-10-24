import { Dialog, DialogContent } from "@mui/material";

interface Props {
  src: string;
  open: boolean;
  onClose: () => void;
}

const PlayerModal = ({ open, onClose, src }: Props) => {
  return (
    <Dialog
      open={open}
      disableAutoFocus
      onClose={onClose}
      PaperProps={{ style: { borderRadius: "8px" } }}
    >
      <DialogContent>
        <iframe
          src={src}
          width="760"
          height="400"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default PlayerModal;
