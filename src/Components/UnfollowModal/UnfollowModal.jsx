import React from 'react'

const UnfollowModal = ({ open, onClose, children }) => {
  return (
    // Backdrop
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-all duration-300 ease-in-out ${open ? 'visible bg-black/70' : 'invisible opacity-0'}`}>
        UnfollowModal
    </div>
  )
}

export default UnfollowModal