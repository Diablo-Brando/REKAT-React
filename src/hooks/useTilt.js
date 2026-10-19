import { useRef } from 'react';

export function useTilt(maxTilt = 8) {
    const ref = useRef(null);

    function onMouseMove(e) {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.setProperty('--tilt-x', `${(-y * maxTilt).toFixed(2)}deg`);
        el.style.setProperty('--tilt-y', `${(x * maxTilt).toFixed(2)}deg`);
        el.style.setProperty('--tilt-scale', '1.03');
    }

    function onMouseLeave() {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty('--tilt-x', '0deg');
        el.style.setProperty('--tilt-y', '0deg');
        el.style.setProperty('--tilt-scale', '1');
    }

    return { ref, onMouseMove, onMouseLeave };
}