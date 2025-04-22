import MainButton from "../MainButton/MainButton"

const UnfollowModal = ({ open, user, onClose, onConfirm, onCancel }) => {

    if (!open) return null;

    return (
        <div onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-all duration-300 ease-in-out
            ${open ? 'visible bg-slate-500/25' : 'invisible opacity-0'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()} 
                className={`modal flex flex-col gap-[24px] max-w-[320px] w-full bg-black rounded-2xl shadow p-[32px] transition-all duration-300 ease-in-out
                ${open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
            >
                <div className="flex flex-col gap-[8px]">
                    <h3 className='text-xl font-semibold leading-6'>¿Queres dejar de seguir a @{user.username}?</h3>
                    <p className='text-md font-light opacity-50 leading-[20px]'>
                        Sus posts ya no aparecerán en tu Cronología de inicio. Podrás seguir viendo su perfil, a menos que sus posts estén protegidos.
                    </p>
                </div>
                <div className="flex flex-col gap-[12px] w-full">
                    <MainButton
                        theme={'primary'}
                        className={'font-semibold py-[10px] px-[16px]'}
                        onClick={onConfirm}
                    >
                        Dejar de seguir
                    </MainButton>
                    <MainButton
                        theme={'secondary'}
                        onClick={onCancel}
                        className={'font-semibold py-[10px] px-[16px]'}
                    >
                        Cancelar
                    </MainButton>
                </div>
            </div>
        </div>
    )
}

export default UnfollowModal